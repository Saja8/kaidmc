// teams.js Array containing team member information
const teamMembers = [
  {
    name: "Arturo Diaz",
    position: "Chief Executive Officer",
    positionKey: "ceo_position",
    image: "assets/img/team/Archi.webp",
    linkedin: "https://www.linkedin.com/in/arturo-diaz-ponce-80b50ba2"
  },
  {
    name: "Miki Yamanaka",
    position: "Program Coordinator",
    positionKey: "hk_contact_position",
    image: "assets/img/team/Miki1.webp",
    linkedin: "https://www.linkedin.com/company/kailinks/"
  },
  {
    name: "Ali Motahari",
    position: "Regional Operations",
    positionKey: "apac_operations_position",
    image: "assets/img/team/Alison.webp",
    linkedin: "https://www.linkedin.com/in/alimotahari/"
  },
  {
    name: "Arely Sanchez",
    position: "Market Entry Consultant",
    positionKey: "mx_consultant_position",
    image: "assets/img/team/sanchez.webp?v=1769143659",
    linkedin: "https://www.linkedin.com/in/arely-sánchez-tejada-9978996a/"
  },
  {
    name: "Satomi Ota",
    position: "Market Entry Advisor",
    positionKey: "market_advisor_position",
    image: "assets/img/team/Sami1.webp",
    linkedin: "https://www.linkedin.com/in/satomi-o-8ba049216/"
  },
  {
    name: "Takaji Fujita",
    position: "International Relations",
    positionKey: "intl_relations_position",
    image: "assets/img/team/Aniki.webp",
    linkedin: "https://www.linkedin.com/company/kailinks/"
  },
  {
    name: "Parisa Jalali",
    position: "Program Advisor",
    positionKey: "de_contact_position",
    image: "assets/img/team/pari.webp",
    linkedin: "https://www.linkedin.com/in/parisa-jalali-4a324019a/"
  }
];

// Performance optimizations
let teamSwiperInstance = null;
let isGenerating = false;

// Function to get translated text from current language
function getTranslatedText(key, fallback) {
  if (window.currentTranslations && window.currentTranslations[key]) {
    return window.currentTranslations[key];
  }
  return fallback || key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// Debounced function to prevent multiple rapid calls
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Function to generate the team member slides dynamically
function generateTeamSlider() {
  if (isGenerating) return;
  
  const swiperWrapper = document.querySelector(".team-swiper .swiper-wrapper");
  
  if (!swiperWrapper) {
    console.warn('Team swiper wrapper not found');
    return;
  }

  isGenerating = true;

  try {
    // Only destroy if we need to recreate structure
    const needsRecreation = swiperWrapper.children.length === 0;
    
    if (teamSwiperInstance && needsRecreation) {
      teamSwiperInstance.destroy(true, true);
      teamSwiperInstance = null;
    }

    // Only recreate HTML if needed
    if (needsRecreation) {
      swiperWrapper.innerHTML = '';

      // Create slides with immediate image loading (no lazy loading for small images)
      const fragment = document.createDocumentFragment();

      teamMembers.forEach((member, index) => {
        const translatedPosition = getTranslatedText(member.positionKey, member.position);
        
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
          <div class="member" data-aos="fade-up" data-aos-delay="${50 + (index * 25)}">
            <div class="member-img">
              <img src="${member.image}" class="img-fluid" alt="Portrait of ${member.name}, ${translatedPosition}" loading="eager" decoding="sync">
              <div class="social">
                ${member.linkedin && member.linkedin !== "#" ? 
                  `<a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" 
                     aria-label="View ${member.name}'s LinkedIn profile"
                     data-bs-toggle="tooltip" 
                     data-bs-placement="top" 
                     title="Connect on LinkedIn">
                    <i class="bi bi-linkedin" aria-hidden="true"></i>
                  </a>` : 
                  '<span class="social-placeholder" aria-hidden="true"><i class="bi bi-person" aria-hidden="true"></i></span>'
                }
              </div>
            </div>
            <div class="member-info text-center">
              <h4>${member.name}</h4>
              <span data-translate="${member.positionKey}">${translatedPosition}</span>
            </div>
          </div>
        `;
        fragment.appendChild(slide);
      });

      swiperWrapper.appendChild(fragment);

      // Initialize swiper only once
      if (typeof Swiper !== 'undefined') {
        initializeTeamSwiper();
      }
    } else {
      // Just update translations without recreating structure
      updateTeamTranslations();
    }
    
    isGenerating = false;

  } catch (error) {
    console.error('Error generating team slider:', error);
    isGenerating = false;
  }
}

// Function to update only translations without recreating DOM
function updateTeamTranslations() {
  const slides = document.querySelectorAll('.team-swiper .swiper-slide');
  slides.forEach((slide, index) => {
    if (teamMembers[index]) {
      const translatedPosition = getTranslatedText(teamMembers[index].positionKey, teamMembers[index].position);
      const positionSpan = slide.querySelector('[data-translate]');
      if (positionSpan) {
        positionSpan.textContent = translatedPosition;
      }
    }
  });
}

function initializeTeamSwiper() {
  try {
    teamSwiperInstance = new Swiper('.team-swiper', {
      loop: true,
      speed: 8000, // Very slow - 8 seconds per transition
      autoplay: {
        delay: 2000, // 2 second pause between movements
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: false
      },
      slidesPerView: 'auto',
      spaceBetween: 8,
      centeredSlides: false,
      grabCursor: true,
      allowTouchMove: true,
      freeMode: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2.5,
          spaceBetween: 8,
          centeredSlides: false
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
          centeredSlides: false
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
          centeredSlides: false
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 20,
          centeredSlides: false
        }
      }
    });
  } catch (error) {
    console.error('Error initializing team swiper:', error);
  }
}

// Debounced version of generateTeamSlider
const debouncedGenerateTeamSlider = debounce(generateTeamSlider, 300);

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper = document.querySelector(".team-swiper .swiper-wrapper");

  if (!swiperWrapper) {
    console.error("Team swiper wrapper not found!");
    return;
  }

  generateTeamSlider();
});

// Listen for language changes
window.addEventListener('languageChanged', debouncedGenerateTeamSlider);

// Export for external use
window.teamSlider = {
  refresh: debouncedGenerateTeamSlider,
  forceRefresh: generateTeamSlider,
  members: teamMembers
};
