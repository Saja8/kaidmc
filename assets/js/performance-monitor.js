// Performance monitoring for KaiLinks website
// Tracks Core Web Vitals and user experience metrics

(function() {
  'use strict';

  // Performance metrics collection
  const performanceMetrics = {
    navigationTiming: {},
    coreWebVitals: {},
    customMetrics: {}
  };

  // Core Web Vitals measurement
  function measureCoreWebVitals() {
    // First Contentful Paint (FCP)
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          performanceMetrics.coreWebVitals.fcp = entry.startTime;
          console.log('FCP:', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        performanceMetrics.coreWebVitals.lcp = entry.startTime;
        console.log('LCP:', entry.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID) - approximation
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        performanceMetrics.coreWebVitals.fid = entry.processingStart - entry.startTime;
        console.log('FID:', performanceMetrics.coreWebVitals.fid);
      }
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      performanceMetrics.coreWebVitals.cls = clsValue;
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }

  // Navigation timing
  function measureNavigationTiming() {
    if ('performance' in window && 'timing' in performance) {
      const timing = performance.timing;
      const navigation = performance.navigation;

      performanceMetrics.navigationTiming = {
        // Navigation type
        navigationType: navigation.type,
        redirectCount: navigation.redirectCount,
        
        // Key timing metrics
        dns: timing.domainLookupEnd - timing.domainLookupStart,
        tcp: timing.connectEnd - timing.connectStart,
        ssl: timing.secureConnectionStart ? timing.connectEnd - timing.secureConnectionStart : 0,
        ttfb: timing.responseStart - timing.navigationStart,
        download: timing.responseEnd - timing.responseStart,
        domLoading: timing.domLoading - timing.navigationStart,
        domInteractive: timing.domInteractive - timing.navigationStart,
        domComplete: timing.domComplete - timing.navigationStart,
        loadComplete: timing.loadEventEnd - timing.navigationStart
      };

      console.log('Navigation Timing:', performanceMetrics.navigationTiming);
    }
  }

  // Custom metrics for KaiLinks specific features
  function measureCustomMetrics() {
    // Language switching performance
    let languageSwitchStart = null;
    document.addEventListener('click', (e) => {
      if (e.target.matches('.langs a')) {
        languageSwitchStart = performance.now();
      }
    });

    // Measure when language switch completes
    const observer = new MutationObserver(() => {
      if (languageSwitchStart) {
        performanceMetrics.customMetrics.languageSwitch = performance.now() - languageSwitchStart;
        console.log('Language Switch Time:', performanceMetrics.customMetrics.languageSwitch);
        languageSwitchStart = null;
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    // Team slider loading time
    const teamSection = document.querySelector('#about');
    if (teamSection) {
      const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const teamLoadStart = performance.now();
            const checkTeamLoaded = () => {
              const teamSlider = document.querySelector('.team-swiper .swiper-slide');
              if (teamSlider) {
                performanceMetrics.customMetrics.teamSliderLoad = performance.now() - teamLoadStart;
                console.log('Team Slider Load Time:', performanceMetrics.customMetrics.teamSliderLoad);
                teamObserver.disconnect();
              } else {
                requestAnimationFrame(checkTeamLoaded);
              }
            };
            checkTeamLoaded();
          }
        });
      });
      teamObserver.observe(teamSection);
    }
  }

  // Resource loading analysis
  function analyzeResourceLoading() {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const resources = performance.getEntriesByType('resource');
      
      const resourceSummary = {
        css: [],
        js: [],
        images: [],
        fonts: [],
        other: []
      };

      resources.forEach(resource => {
        const type = getResourceType(resource.name);
        const timing = {
          name: resource.name,
          size: resource.transferSize || resource.encodedBodySize,
          duration: resource.duration,
          blocked: resource.domainLookupStart - resource.fetchStart,
          dns: resource.domainLookupEnd - resource.domainLookupStart,
          tcp: resource.connectEnd - resource.connectStart,
          request: resource.responseStart - resource.requestStart,
          response: resource.responseEnd - resource.responseStart
        };

        resourceSummary[type].push(timing);
      });

      console.log('Resource Loading Summary:', resourceSummary);
      performanceMetrics.resources = resourceSummary;
    }
  }

  function getResourceType(url) {
    if (url.includes('.css')) return 'css';
    if (url.includes('.js')) return 'js';
    if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) return 'images';
    if (url.includes('font')) return 'fonts';
    return 'other';
  }

  // Performance report generation
  function generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connection: navigator.connection || navigator.mozConnection || navigator.webkitConnection,
      ...performanceMetrics
    };

    // Score calculation based on Core Web Vitals
    const scores = calculatePerformanceScores(report.coreWebVitals);
    report.scores = scores;

    console.log('Performance Report:', report);
    
    // Optional: Send to analytics
    // sendToAnalytics(report);
    
    return report;
  }

  function calculatePerformanceScores(vitals) {
    const scores = {};
    
    // FCP scoring (Good: <1.8s, Needs Improvement: 1.8-3s, Poor: >3s)
    if (vitals.fcp) {
      scores.fcp = vitals.fcp < 1800 ? 'good' : vitals.fcp < 3000 ? 'needs-improvement' : 'poor';
    }
    
    // LCP scoring (Good: <2.5s, Needs Improvement: 2.5-4s, Poor: >4s)
    if (vitals.lcp) {
      scores.lcp = vitals.lcp < 2500 ? 'good' : vitals.lcp < 4000 ? 'needs-improvement' : 'poor';
    }
    
    // FID scoring (Good: <100ms, Needs Improvement: 100-300ms, Poor: >300ms)
    if (vitals.fid) {
      scores.fid = vitals.fid < 100 ? 'good' : vitals.fid < 300 ? 'needs-improvement' : 'poor';
    }
    
    // CLS scoring (Good: <0.1, Needs Improvement: 0.1-0.25, Poor: >0.25)
    if (vitals.cls !== undefined) {
      scores.cls = vitals.cls < 0.1 ? 'good' : vitals.cls < 0.25 ? 'needs-improvement' : 'poor';
    }
    
    return scores;
  }

  // Initialize monitoring when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Start measurements
    measureCoreWebVitals();
    measureCustomMetrics();
    
    // Measure navigation timing after load
    window.addEventListener('load', () => {
      setTimeout(() => {
        measureNavigationTiming();
        analyzeResourceLoading();
        
        // Generate final report after 5 seconds
        setTimeout(generatePerformanceReport, 5000);
      }, 1000);
    });
  }

  // Export for manual access
  window.KaiLinksPerformance = {
    getMetrics: () => performanceMetrics,
    generateReport: generatePerformanceReport
  };

})();
