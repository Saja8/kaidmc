// SEO enhancements for KaiLinks website
// Automatically generates structured data and optimizes content

(function() {
  'use strict';

  const seoEnhancements = {
    // Generate breadcrumb structured data
    generateBreadcrumbs() {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": window.location.origin
          }
        ]
      };

      // Add to head
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(script);
    },

    // Generate FAQ structured data from page content
    generateFAQStructuredData() {
      const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does KaiLinks offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "KaiLinks offers educational programs, corporate market-entry support, delegation logistics, and innovation event coordination across East Asia, Latin America, and Europe."
            }
          },
          {
            "@type": "Question",
            "name": "Which countries does KaiLinks operate in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "KaiLinks works from Mexico and Japan, with active links in Germany, to support organizations building programs across Latin America, East Asia, and Europe."
            }
          },
          {
            "@type": "Question",
            "name": "How does KaiLinks help with exhibition management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We design agendas, coordinate partners and institutions, manage logistics, support interpretation, and handle on-site execution for international programs."
            }
          }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(faqData);
      document.head.appendChild(script);
    },

    // Generate service structured data
    generateServiceStructuredData() {
      const serviceData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cross-Border Innovation Programs",
        "provider": {
          "@type": "Organization",
          "name": "KaiLinks",
          "url": window.location.origin
        },
        "serviceType": "Business Services",
        "areaServed": [
          "Mexico", "Japan", "Germany", "Latin America", "East Asia", "Europe"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "KaiLinks Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Educational Programs",
                "description": "Academic visits, innovation ecosystem immersions, conferences, and institutional exchanges"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate Market Entry",
                "description": "Market diagnosis, B2B agenda design, and local coordination across East Asia, Latin America, and Europe"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Delegations and Group Programs",
                "description": "Program design, logistics, staffing, and on-site execution for delegations and groups"
              }
            }
          ]
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(serviceData);
      document.head.appendChild(script);
    },

    // Add social media meta tags dynamically
    enhanceSocialMetaTags() {
      const currentTitle = document.title;
      const currentDescription = document.querySelector('meta[name="description"]')?.content || '';
      const currentUrl = window.location.href;

      // Add Open Graph tags if missing
      if (!document.querySelector('meta[property="og:url"]')) {
        const ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        ogUrl.setAttribute('content', currentUrl);
        document.head.appendChild(ogUrl);
      }

      // Add Twitter tags if missing
      if (!document.querySelector('meta[name="twitter:url"]')) {
        const twitterUrl = document.createElement('meta');
        twitterUrl.setAttribute('name', 'twitter:url');
        twitterUrl.setAttribute('content', currentUrl);
        document.head.appendChild(twitterUrl);
      }
    },

    // Add canonical URL
    addCanonicalURL() {
      if (!document.querySelector('link[rel="canonical"]')) {
        const canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = window.location.href.split('?')[0].split('#')[0];
        document.head.appendChild(canonical);
      }
    },

    // Generate event structured data for upcoming events
    generateEventStructuredData() {
      const events = [
        {
          name: "Tokyo-Latin America Innovation Exchange",
          description: "Public program connecting companies, embassies, startups, and support organizations across East Asia and Latin America.",
          startDate: "2026-06-29",
          endDate: "2026-06-29",
          location: "Tokyo Innovation Base, Tokyo, Japan"
        }
      ];

      events.forEach(event => {
        const eventData = {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": event.name,
          "description": event.description,
          "startDate": event.startDate,
          "endDate": event.endDate,
          "location": {
            "@type": "Place",
            "name": event.location
          },
          "organizer": {
            "@type": "Organization",
            "name": "KaiLinks",
            "url": window.location.origin
          },
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(eventData);
        document.head.appendChild(script);
      });
    },

    // Optimize heading structure
    optimizeHeadingStructure() {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let h1Count = 0;

      headings.forEach(heading => {
        if (heading.tagName === 'H1') {
          h1Count++;
        }

        // Ensure headings have proper hierarchy
        if (!heading.textContent.trim()) {
          console.warn('Empty heading found:', heading);
        }

        // Add IDs for better linking if missing
        if (!heading.id && heading.textContent) {
          heading.id = heading.textContent
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .trim();
        }
      });

      if (h1Count > 1) {
        console.warn(`Multiple H1 tags found (${h1Count}). Consider using only one H1 per page.`);
      }
    },

    // Add alt text validation for images
    validateImageAccessibility() {
      const images = document.querySelectorAll('img');
      let missingAltCount = 0;

      images.forEach(img => {
        if (!img.alt || img.alt.trim() === '') {
          missingAltCount++;
          console.warn('Image missing alt text:', img.src);
        }
      });

      if (missingAltCount > 0) {
        console.warn(`${missingAltCount} images missing alt text`);
      }
    },

    // Generate LocalBusiness structured data
    generateLocalBusinessData() {
      const businessData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "KaiLinks",
        "url": window.location.origin,
        "logo": `${window.location.origin}/assets/img/logo.webp`,
        "description": "Cross-border innovation programs, market-entry support, delegation logistics, and on-ground event execution across East Asia, Latin America, and Europe",
        "foundingDate": "2020",
        "founder": {
          "@type": "Person",
          "name": "KaiLinks Team"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+81 070 1520 2323",
            "contactType": "customer service",
            "availableLanguage": ["English", "Spanish", "Japanese"]
          }
        ],
        "sameAs": [
          "https://x.com/KaiLinksGlobal",
          "https://www.instagram.com/kailinksglobal/",
          "https://www.linkedin.com/company/kai-links/"
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "addressCountry": "MX",
            "addressLocality": "Mexico"
          },
          {
            "@type": "PostalAddress",
            "addressCountry": "JP",
            "addressLocality": "Japan"
          }
        ],
        "areaServed": [
          {
            "@type": "Country",
            "name": "Mexico"
          },
          {
            "@type": "Country",
            "name": "Japan"
          },
          {
            "@type": "Country",
            "name": "Germany"
          },
          {
            "@type": "Place",
            "name": "Latin America"
          },
          {
            "@type": "Place",
            "name": "East Asia"
          },
          {
            "@type": "Place",
            "name": "Europe"
          }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(businessData);
      document.head.appendChild(script);
    },

    // Initialize all SEO enhancements
    init() {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          this.runEnhancements();
        });
      } else {
        this.runEnhancements();
      }
    },

    runEnhancements() {
      try {
        this.addCanonicalURL();
        this.enhanceSocialMetaTags();
        this.generateBreadcrumbs();
        this.generateFAQStructuredData();
        this.generateServiceStructuredData();
        this.generateEventStructuredData();
        this.generateLocalBusinessData();
        this.optimizeHeadingStructure();
        this.validateImageAccessibility();
        
        console.log('SEO enhancements applied successfully');
      } catch (error) {
        console.error('Error applying SEO enhancements:', error);
      }
    }
  };

  // Initialize SEO enhancements
  seoEnhancements.init();

  // Export for manual access
  window.KaiLinksSEO = seoEnhancements;

})();
