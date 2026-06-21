// Language detection and preloading
function detectUserLanguage() {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && ['english', 'spanish', 'japanese'].includes(savedLanguage)) {
        return savedLanguage;
    }
    
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const langMap = {
        'es': 'spanish',
        'es-ES': 'spanish',
        'es-MX': 'spanish',
        'ja': 'japanese',
        'ja-JP': 'japanese'
    };
    
    return langMap[browserLang] || 'english'; // Default to English
}

// Preload language file for better performance
function preloadLanguage(lang) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = `assets/js/${lang}.json`;
    link.as = 'fetch';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
}

// Initialize language detection and preloading on page load
document.addEventListener('DOMContentLoaded', () => {
    const detectedLang = detectUserLanguage();
    
    // Preload the detected language
    preloadLanguage(detectedLang);
    
    // Also preload English as fallback if not already detected
    if (detectedLang !== 'english') {
        preloadLanguage('english');
    }
    
    // Auto-load the detected language if no manual selection has been made
    if (!sessionStorage.getItem('manualLanguageSelection')) {
        changeLang(detectedLang);
    }
});

// Function to load the translations from the JSON file
async function loadTranslations(lang) {
    try {
        const response = await fetch(`assets/js/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${lang} translations:`, error);
        
        // Show user-friendly error message
        showTranslationError(lang);
        return null;
    }
}

// Function to show translation error to user
function showTranslationError(lang) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'translation-error';
    errorMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #f8d7da;
        color: #721c24;
        padding: 12px 16px;
        border: 1px solid #f5c6cb;
        border-radius: 4px;
        z-index: 9999;
        font-size: 14px;
        max-width: 300px;
    `;
    errorMessage.innerHTML = `
        <strong>Translation Error:</strong><br>
        Failed to load ${lang} language. Using English as fallback.
        <button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; font-size: 16px; cursor: pointer;">&times;</button>
    `;
    
    document.body.appendChild(errorMessage);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (errorMessage.parentElement) {
            errorMessage.remove();
        }
    }, 5000);
}

// Function to change language and update the page content
async function changeLang(lang, isManualSelection = false) {
    // Track manual language selections
    if (isManualSelection) {
        sessionStorage.setItem('manualLanguageSelection', 'true');
    }
    
    // Show loading indicator
    showLoadingIndicator(true);
    
    try {
        const translations = await loadTranslations(lang);

        if (!translations) {
            console.warn(`Language ${lang} not found, falling back to English.`);
            // Prevent infinite recursion
            if (lang !== 'english') {
                return changeLang('english');
            }
            return;
        }

        // Store translations globally for other scripts to access
        window.currentTranslations = translations;

        // Loop through all elements with a data-translate attribute and update their text
        document.querySelectorAll('[data-translate]').forEach((element) => {
            const translationKey = element.getAttribute('data-translate');
            if (translations[translationKey]) {
                // Handle HTML content in translations
                if (translations[translationKey].includes('<') || translations[translationKey].includes('&')) {
                    element.innerHTML = translations[translationKey];
                } else {
                    element.textContent = translations[translationKey];
                }
            } else {
                console.warn(`Missing translation key: ${translationKey} for language: ${lang}`);
            }
        });

        // Set the language attribute on the document element
        document.documentElement.lang = lang === 'english' ? 'en' : lang === 'spanish' ? 'es' : 'ja';
        
        // Store the selected language in localStorage for persistence
        localStorage.setItem('selectedLanguage', lang);
        
        // Update page title if translation exists
        const titleKey = 'page_title';
        if (translations[titleKey]) {
            document.title = translations[titleKey];
        }
        
        // Regenerate team slider with new translations
        if (typeof generateTeamSlider === 'function') {
            generateTeamSlider();
        }
        
    } catch (error) {
        console.error('Error in changeLang:', error);
        showTranslationError(lang);
    } finally {
        showLoadingIndicator(false);
    }
}

// Function to show/hide loading indicator
function showLoadingIndicator(show) {
    let indicator = document.getElementById('translation-loading');
    
    if (show) {
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.id = 'translation-loading';
            indicator.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 20px;
                border-radius: 8px;
                z-index: 10000;
                font-size: 14px;
                text-align: center;
            `;
            indicator.innerHTML = `
                <div style="margin-bottom: 10px;">Loading translation...</div>
                <div style="width: 20px; height: 20px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;
            document.body.appendChild(indicator);
        }
    } else {
        if (indicator) {
            indicator.remove();
        }
    }
}

// Load the saved language preference when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    // Check for saved language preference first
    const savedLang = localStorage.getItem('selectedLanguage');
    
    let langToUse = 'english'; // Default fallback
    
    if (savedLang && ['english', 'spanish', 'japanese'].includes(savedLang)) {
        langToUse = savedLang;
    } else {
        // Get the browser language (first part of the language code, e.g., 'en', 'es', 'ja')
        const browserLang = navigator.language.split('-')[0];
        
        // Map browser language codes to our language files
        const langMap = {
            'en': 'english',
            'es': 'spanish', 
            'ja': 'japanese'
        };
        
        // Use browser language if available, otherwise default to English
        langToUse = langMap[browserLang] || 'english';
    }

    // Set the language based on preference, browser language, or default to English
    await changeLang(langToUse);
    
    // Update the active language button
    updateActiveLanguageButton(langToUse);
});

// Function to update active language button
function updateActiveLanguageButton(lang) {
    document.querySelectorAll('.langs a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.lang === lang) {
            link.classList.add('active');
        }
    });
}

// Handle language selection manually
document.querySelectorAll('.langs a').forEach((link) => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const lang = link.dataset.lang;

        // Prevent multiple rapid clicks
        if (link.classList.contains('loading')) {
            return;
        }
        
        link.classList.add('loading');

        try {
            // Change language when clicked (mark as manual selection)
            await changeLang(lang, true);

            // Update active language button
            updateActiveLanguageButton(lang);
        } catch (error) {
            console.error('Error changing language:', error);
        } finally {
            link.classList.remove('loading');
        }
    });
});
