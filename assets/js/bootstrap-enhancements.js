// Bootstrap 5 enhancements for better UX
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Enhanced smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add a subtle flash effect to the target section
                target.classList.add('highlight-section');
                setTimeout(() => {
                    target.classList.remove('highlight-section');
                }, 2000);
            }
        });
    });

    // 2. Enhanced card hover effects using Bootstrap classes
    const cards = document.querySelectorAll('.card, .post-item, .member');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
            this.style.transform = 'translateY(0)';
        });
    });

    // 3. Enhanced form validation with Bootstrap 5 styles (if forms exist)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // 4. Enhanced tooltips for social links
    const socialLinks = document.querySelectorAll('.social a, [data-bs-toggle="tooltip"]');
    socialLinks.forEach(link => {
        if (window.bootstrap && bootstrap.Tooltip) {
            new bootstrap.Tooltip(link, {
                placement: 'top',
                trigger: 'hover focus'
            });
        }
    });

    // 5. Enhanced loading states for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // 6. Enhanced responsive behavior for navigation
    const navbar = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - add compact class
            navbar?.classList.add('scrolled-compact');
        } else {
            // Scrolling up - remove compact class
            navbar?.classList.remove('scrolled-compact');
        }
        lastScrollTop = scrollTop;
    });

    // 7. Enhanced focus management for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
});
