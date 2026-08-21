// ========================================
// MAIN APPLICATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ========================================
    // CONFIGURATION
    // ========================================
    var CONFIG = {
        scrollOffset: 100,
        animationDelay: 200,
        mobileBreakpoint: 768,
        smoothScrollDuration: 800,
    };

    // ========================================
    // DOM REFERENCES
    // ========================================
    var body = document.body;
    var header = document.querySelector('.site-header');
    var menuToggle = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    var navItems = document.querySelectorAll('.nav-links a');
    var sections = document.querySelectorAll('section[id]');
    var revealElements = document.querySelectorAll('.reveal');
    var scrollIndicator = document.querySelector('.scroll-indicator');
    var contactForm = document.querySelector('.contact-form');
    var backToTop = document.querySelector('.back-to-top');

    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    function toggleMobileMenu() {
        var isOpen = navLinks.classList.contains('active');
        
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', !isOpen);
        
        if (!isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    function closeMobileMenu() {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    navItems.forEach(function(link) {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ========================================
    // SCROLL REVEAL ANIMATIONS
    // ========================================
    function isElementInViewport(element, offset) {
        offset = offset || CONFIG.scrollOffset;
        var rect = element.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        return rect.top <= windowHeight - offset && rect.bottom >= 0;
    }

    function handleRevealElements() {
        revealElements.forEach(function(element, index) {
            if (isElementInViewport(element)) {
                setTimeout(function() {
                    element.classList.add('visible');
                }, index * CONFIG.animationDelay);
            }
        });
    }

    setTimeout(handleRevealElements, 300);

    // ========================================
    // ACTIVE NAVIGATION LINK
    // ========================================
    function updateActiveNavLink() {
        var scrollPosition = window.scrollY + 120;

        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            var sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    var lastScrollY = 0;

    function handleHeaderScroll() {
        var currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        lastScrollY = currentScrollY;
    }

    // ========================================
    // SCROLL INDICATOR
    // ========================================
    function handleScrollIndicator() {
        if (!scrollIndicator) return;
        
        var heroSection = document.querySelector('.hero');
        var heroHeight = heroSection ? heroSection.offsetHeight : 0;
        var scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight * 0.3) {
            scrollIndicator.classList.add('fade-out');
        } else {
            scrollIndicator.classList.remove('fade-out');
        }
    }

    // ========================================
    // SMOOTH SCROLL FOR NAV LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            var targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                var headerHeight = header.offsetHeight;
                var targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    function handleBackToTop() {
        if (!backToTop) return;
        
        var scrollPosition = window.scrollY;
        
        if (scrollPosition > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    // ========================================
    // CONTACT FORM HANDLING
    // ========================================
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var submitBtn = this.querySelector('.btn');
            var originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(function() {
                submitBtn.innerHTML = '<i class="fa-regular fa-check-circle"></i> Sent Successfully!';
                submitBtn.classList.add('success');

                contactForm.reset();

                setTimeout(function() {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('success');
                }, 3000);
            }, 2000);
        });

        var formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(function(input) {
            input.addEventListener('focus', function() {
                var group = this.closest('.form-group');
                if (group) group.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                var group = this.closest('.form-group');
                if (group) group.classList.remove('focused');
                
                if (this.value.trim() !== '') {
                    if (group) group.classList.add('filled');
                } else {
                    if (group) group.classList.remove('filled');
                }
            });
        });
    }

    // ========================================
    // INTERSECTION OBSERVER
    // ========================================
    if ('IntersectionObserver' in window) {
        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        var sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                }
            });
        }, observerOptions);

        sections.forEach(function(section) {
            sectionObserver.observe(section);
        });
    }

    // ========================================
    // PROGRESSIVE ENHANCEMENTS
    // ========================================
    window.addEventListener('load', function() {
        body.classList.add('loaded');
    });

    // ========================================
    // DEBOUNCED SCROLL HANDLER
    // ========================================
    var scrollTimeout;

    function debouncedScroll() {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }

        scrollTimeout = requestAnimationFrame(function() {
            updateActiveNavLink();
            handleHeaderScroll();
            handleScrollIndicator();
            handleBackToTop();
            handleRevealElements();
        });
    }

    // ========================================
    // RESIZE HANDLER
    // ========================================
    var resizeTimeout;

    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            if (window.innerWidth > CONFIG.mobileBreakpoint) {
                closeMobileMenu();
            }
        }, 250);
    }

    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    document.addEventListener('keydown', function(e) {
        if (navLinks.classList.contains('active')) {
            var focusableElements = navLinks.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length > 0) {
                var firstElement = focusableElements[0];
                var lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.key === 'Tab') {
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        }
    });

    // ========================================
    // SKILL TAGS INTERACTIVITY
    // ========================================
    document.querySelectorAll('.skill-list span').forEach(function(tag) {
        tag.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // ========================================
    // PROJECT CARD INTERACTIONS
    // ========================================
    document.querySelectorAll('.project-card').forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            var image = this.querySelector('.project-image');
            if (image) image.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
            var image = this.querySelector('.project-image');
            if (image) image.classList.remove('hovered');
        });
    });

    // ========================================
    // EVENT LISTENERS
    // ========================================
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    // ========================================
    // INITIAL CALLS
    // ========================================
    setTimeout(function() {
        handleRevealElements();
        updateActiveNavLink();
        handleHeaderScroll();
        handleScrollIndicator();
        handleBackToTop();
    }, 100);

    // ========================================
    // CONSOLE WELCOME
    // ========================================
    console.log('%c🚀 Muhammad Asif - Portfolio', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%cPHP & Laravel Full Stack Developer', 'font-size: 16px; color: #8a8aa0;');
    console.log('%cBuilt with ❤️ using Vanilla JS', 'font-size: 14px; color: #8a8aa0;');

    // ========================================
    // EXPOSE API FOR DEBUGGING
    // ========================================
    window.__portfolio = {
        toggleMenu: toggleMobileMenu,
        closeMenu: closeMobileMenu,
        revealElements: revealElements,
        sections: sections,
        CONFIG: CONFIG
    };
});


const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    successMessage.style.display = "block";

    form.reset();

});