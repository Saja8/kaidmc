(function() {
  "use strict";

  // Utility function for safe DOM queries
  const safeQuerySelector = (selector) => {
    try {
      return document.querySelector(selector);
    } catch (error) {
      console.warn('Invalid selector:', selector, error);
      return null;
    }
  };

  // Utility function for safe DOM queries (multiple elements)
  const safeQuerySelectorAll = (selector) => {
    try {
      return document.querySelectorAll(selector);
    } catch (error) {
      console.warn('Invalid selector:', selector, error);
      return [];
    }
  };

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = safeQuerySelector('body');
    const selectHeader = safeQuerySelector('#header');
    
    if (!selectBody || !selectHeader) return;
    
    if (!selectHeader.classList.contains('scroll-up-sticky') && 
        !selectHeader.classList.contains('sticky-top') && 
        !selectHeader.classList.contains('fixed-top')) return;
        
    const scrollThreshold = 100;
    if (window.scrollY > scrollThreshold) {
      selectBody.classList.add('scrolled');
    } else {
      selectBody.classList.remove('scrolled');
    }
  }

  // Throttled scroll event for better performance
  let scrollTimeout;
  const throttledScrollHandler = () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      toggleScrolled();
      scrollTimeout = null;
    }, 16); // ~60fps
  };

  document.addEventListener('scroll', throttledScrollHandler, { passive: true });
  window.addEventListener('load', toggleScrolled);

  /**
   * Scroll up sticky header to headers with .scroll-up-sticky class
   */
  let lastScrollTop = 0;
  const scrollUpHandler = () => {
    const selectHeader = safeQuerySelector('#header');
    if (!selectHeader || !selectHeader.classList.contains('scroll-up-sticky')) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = selectHeader.offsetHeight;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      // Scrolling down
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = `-${headerHeight + 50}px`;
    } else if (scrollTop > headerHeight) {
      // Scrolling up
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = "0";
    } else {
      // At top
      selectHeader.style.removeProperty('top');
      selectHeader.style.removeProperty('position');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  };

  // Throttled scroll handler for header
  let headerScrollTimeout;
  window.addEventListener('scroll', () => {
    if (headerScrollTimeout) return;
    headerScrollTimeout = setTimeout(() => {
      scrollUpHandler();
      headerScrollTimeout = null;
    }, 16);
  }, { passive: true });

  /**
   * Mobile nav toggle - Simple and working
   */
  const mobileNavToggleBtn = safeQuerySelector('.mobile-nav-toggle');

  function mobileNavToggle() {
    const body = safeQuerySelector('body');
    
    if (!body || !mobileNavToggleBtn) return;
    
    body.classList.toggle('mobile-nav-active');
    
    // Simple icon toggle
    if (body.classList.contains('mobile-nav-active')) {
      mobileNavToggleBtn.innerHTML = '<i class="bi bi-x"></i>';
      mobileNavToggleBtn.setAttribute('aria-expanded', 'true');
      mobileNavToggleBtn.setAttribute('aria-label', 'Close navigation menu');
    } else {
      mobileNavToggleBtn.innerHTML = '<i class="bi bi-list"></i>';
      mobileNavToggleBtn.setAttribute('aria-expanded', 'false');
      mobileNavToggleBtn.setAttribute('aria-label', 'Open navigation menu');
    }
  }
  
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
    // Set initial state
    mobileNavToggleBtn.innerHTML = '<i class="bi bi-list"></i>';
    mobileNavToggleBtn.setAttribute('aria-expanded', 'false');
    mobileNavToggleBtn.setAttribute('aria-label', 'Open navigation menu');
  }
  /**
   * Hide mobile nav on same-page/hash links
   */
  safeQuerySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      const body = safeQuerySelector('body');
      if (body && body.classList.contains('mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  /**
   * Close mobile nav when clicking outside
   */
  document.addEventListener('click', function(e) {
    const body = safeQuerySelector('body');
    const navmenu = safeQuerySelector('.navmenu');
    const mobileNavToggle = safeQuerySelector('.mobile-nav-toggle');
    
    if (body && body.classList.contains('mobile-nav-active')) {
      // Check if click is outside the navigation menu and toggle button
      if (!navmenu?.contains(e.target) && !mobileNavToggle?.contains(e.target)) {
        mobileNavToggle();
      }
    }
  });

  /**
   * Toggle mobile nav dropdowns
   */
  safeQuerySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      const parent = this.parentNode;
      const nextSibling = this.parentNode.nextElementSibling;
      
      if (parent && nextSibling) {
        parent.classList.toggle('active');
        nextSibling.classList.toggle('dropdown-active');
      }
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      const swiperConfigElement = swiperElement.querySelector(".swiper-config");
  
      // Check if .swiper-config element exists
      if (swiperConfigElement) {
        let config = JSON.parse(swiperConfigElement.innerHTML.trim());
  
        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      } else {
        console.error("Swiper configuration is missing for", swiperElement);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();