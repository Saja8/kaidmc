// Simple service tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');
    
    // Ensure first tab is active
    if (tabLinks.length > 0) {
        const firstTab = tabLinks[0];
        const firstTarget = document.querySelector(firstTab.getAttribute('data-bs-target'));
        
        firstTab.classList.add('active', 'show');
        if (firstTarget) {
            firstTarget.classList.add('active', 'show');
        }
    }
});
