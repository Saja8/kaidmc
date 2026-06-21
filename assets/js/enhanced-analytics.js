// Enhanced Google Analytics setup for KaiLinks
// Tracks user interactions, language preferences, and business metrics

(function() {
  'use strict';

  // Enhanced GA4 configuration
  if (typeof gtag !== 'undefined') {
    // Enhanced measurement configuration
    gtag('config', 'G-H7H8RDSSEJ', {
      // Enhanced measurement features
      enhanced_measurement: true,
      
      // Custom parameters
      custom_map: {
        'custom_parameter_1': 'user_language_preference',
        'custom_parameter_2': 'service_interest'
      },
      
      // Privacy settings
      anonymize_ip: true,
      allow_google_signals: false
    });

    // Track language switching
    document.addEventListener('click', function(e) {
      if (e.target.matches('.langs a')) {
        const language = e.target.getAttribute('data-lang');
        gtag('event', 'language_switch', {
          event_category: 'engagement',
          event_label: language,
          custom_parameter_1: language
        });
      }
    });

    // Track service interest based on section viewing
    const serviceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const sectionId = entry.target.id;
          const sectionTitle = entry.target.querySelector('h2, h3')?.textContent || sectionId;
          
          gtag('event', 'section_view', {
            event_category: 'engagement',
            event_label: sectionTitle,
            custom_parameter_2: sectionId
          });
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-20% 0px -20% 0px'
    });

    // Observe main sections
    document.querySelectorAll('#about, #features, #events, #workflow, #deals').forEach(section => {
      serviceObserver.observe(section);
    });

    // Track team member interactions
    document.addEventListener('click', function(e) {
      const teamSlide = e.target.closest('.team-member, .swiper-slide');
      if (teamSlide) {
        const memberName = teamSlide.querySelector('.member-name')?.textContent || 'Unknown';
        gtag('event', 'team_member_click', {
          event_category: 'engagement',
          event_label: memberName
        });
      }
    });

    // Track event interest
    document.addEventListener('click', function(e) {
      const eventCard = e.target.closest('[class*="event"], [class*="portfolio"]');
      if (eventCard) {
        const eventTitle = eventCard.querySelector('h3, h4, .event-title')?.textContent || 'Event';
        gtag('event', 'event_interest', {
          event_category: 'business_interest',
          event_label: eventTitle
        });
      }
    });

    // Track scroll depth
    let maxScroll = 0;
    let scrollMilestones = [25, 50, 75, 90, 100];
    let trackedMilestones = [];

    window.addEventListener('scroll', function() {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        scrollMilestones.forEach(milestone => {
          if (scrollPercent >= milestone && !trackedMilestones.includes(milestone)) {
            trackedMilestones.push(milestone);
            gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: milestone + '%',
              value: milestone
            });
          }
        });
      }
    });

    // Track time on page milestones
    let timeOnPageTracked = [];
    [30, 60, 120, 300].forEach(seconds => {
      setTimeout(() => {
        if (!timeOnPageTracked.includes(seconds)) {
          timeOnPageTracked.push(seconds);
          gtag('event', 'time_on_page', {
            event_category: 'engagement',
            event_label: seconds + 's',
            value: seconds
          });
        }
      }, seconds * 1000);
    });

    // Track form interactions (if contact forms are added)
    document.addEventListener('focus', function(e) {
      if (e.target.matches('input, textarea, select')) {
        const formType = e.target.closest('form')?.id || 'contact_form';
        gtag('event', 'form_start', {
          event_category: 'form',
          event_label: formType
        });
      }
    }, true);

    // Track external link clicks
    document.addEventListener('click', function(e) {
      const link = e.target.closest('a');
      if (link && link.href) {
        const isExternal = !link.href.includes(window.location.hostname);
        const isSocial = link.href.match(/(twitter|instagram|linkedin|facebook)/i);
        
        if (isExternal) {
          gtag('event', 'external_link_click', {
            event_category: isSocial ? 'social_media' : 'external_link',
            event_label: link.href,
            transport_type: 'beacon'
          });
        }
      }
    });

    // Track page load performance
    window.addEventListener('load', function() {
      setTimeout(() => {
        if ('performance' in window && 'timing' in performance) {
          const timing = performance.timing;
          const loadTime = timing.loadEventEnd - timing.navigationStart;
          
          // Only track if load time is reasonable (avoid outliers)
          if (loadTime > 0 && loadTime < 30000) {
            gtag('event', 'page_load_time', {
              event_category: 'performance',
              value: Math.round(loadTime),
              metric_id: 'load_time'
            });
          }
        }
      }, 1000);
    });

    // Track PWA install prompt
    window.addEventListener('beforeinstallprompt', function(e) {
      gtag('event', 'pwa_install_prompt_shown', {
        event_category: 'pwa'
      });
    });

    // Track PWA usage
    if (window.matchMedia('(display-mode: standalone)').matches) {
      gtag('event', 'pwa_usage', {
        event_category: 'pwa',
        event_label: 'standalone_mode'
      });
    }

    // Enhanced ecommerce tracking for service inquiries
    function trackServiceInquiry(serviceName, serviceCategory = 'consultation') {
      gtag('event', 'service_inquiry', {
        event_category: 'lead_generation',
        event_label: serviceName,
        value: 1,
        items: [{
          item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
          item_name: serviceName,
          item_category: serviceCategory,
          quantity: 1
        }]
      });
    }

    // Track business interest based on dwelltime in service sections
    const serviceInterestTracker = new Map();
    const serviceObserverDetailed = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        
        if (entry.isIntersecting) {
          serviceInterestTracker.set(sectionId, Date.now());
        } else {
          const startTime = serviceInterestTracker.get(sectionId);
          if (startTime) {
            const dwellTime = Date.now() - startTime;
            if (dwellTime > 5000) { // 5+ seconds indicates genuine interest
              const sectionTitle = entry.target.querySelector('h2, h3')?.textContent || sectionId;
              gtag('event', 'service_interest_dwell', {
                event_category: 'business_interest',
                event_label: sectionTitle,
                value: Math.round(dwellTime / 1000)
              });
            }
            serviceInterestTracker.delete(sectionId);
          }
        }
      });
    }, {
      threshold: 0.3
    });

    document.querySelectorAll('#features .col-lg-6').forEach(serviceSection => {
      serviceObserverDetailed.observe(serviceSection);
    });

    console.log('Enhanced Google Analytics tracking initialized');
  }

})();
