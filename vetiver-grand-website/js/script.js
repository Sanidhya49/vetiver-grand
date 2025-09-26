// ===== VETIVER GRAND WEBSITE JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('header');
    const logoImg = document.querySelector('.logo-img');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // ===== MOBILE MENU TOGGLE =====
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('nav');
    
    // Create mobile menu overlay
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.className = 'mobile-menu-overlay';
    mobileMenuOverlay.innerHTML = `
        <div class="mobile-menu">
            <button class="mobile-menu-close">&times;</button>
            <ul class="mobile-menu-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#celebrations">Celebrations</a></li>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#wellness">Wellness</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    `;
    document.body.appendChild(mobileMenuOverlay);
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    const mobileMenuClose = mobileMenuOverlay.querySelector('.mobile-menu-close');
    mobileMenuClose.addEventListener('click', function() {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close mobile menu when clicking on links
    const mobileMenuLinks = mobileMenuOverlay.querySelectorAll('.mobile-menu-list a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
    const navLinks = document.querySelectorAll('.nav-link, .mobile-menu-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== HERO IMAGE SLIDER =====
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
    
    // ===== HERO IMAGE CURSOR EFFECT =====
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;
        const { offsetWidth: width, offsetHeight: height } = hero;
        
        const moveX = (x / width - 0.5) * 30; // 30 is the intensity
        const moveY = (y / height - 0.5) * 30;
        
        const activeBg = document.querySelector('.hero-slide.active .hero-bg');
        if (activeBg) {
            activeBg.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
        }
    });

    hero.addEventListener('mouseleave', () => {
        const activeBg = document.querySelector('.hero-slide.active .hero-bg');
        if (activeBg) {
            activeBg.style.transform = 'scale(1.1) translate(0, 0)';
        }
    });

    // ===== SCROLL REVEAL ANIMATIONS (Fallback for non-GSAP browsers) =====
    // Only run if GSAP is not available
    if (typeof gsap === 'undefined') {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-in');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
    
    // ===== CELEBRATIONS TABS =====
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // ===== GALLERY LIGHTBOX =====
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-src');
            const imageAlt = this.querySelector('img').getAttribute('alt');
            
            lightboxImage.src = imageSrc;
            lightboxImage.alt = imageAlt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // ===== CONTACT FORM VALIDATION AND SUBMISSION =====
    const contactForm = document.getElementById('contact-form');
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validatePhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        let isValid = true;
        let errorMessage = '';
        
        if (!name) {
            errorMessage += 'Name is required.\n';
            isValid = false;
        }
        
        if (!email) {
            errorMessage += 'Email is required.\n';
            isValid = false;
        } else if (!validateEmail(email)) {
            errorMessage += 'Please enter a valid email address.\n';
            isValid = false;
        }
        
        if (phone && !validatePhone(phone)) {
            errorMessage += 'Please enter a valid phone number.\n';
            isValid = false;
        }
        
        if (!message) {
            errorMessage += 'Message is required.\n';
            isValid = false;
        }
        
        if (!isValid) {
            alert(errorMessage);
            return;
        }
        
        // Submit form data
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('message', message);
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Sorry, there was an error sending your message. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        })
        .finally(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
    });
    
    // ===== CUSTOM SCROLLBAR =====
    const scrollbarThumb = document.querySelector('.custom-scrollbar-thumb');
    let customScrollTimeout;

    function updateScrollbar() {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const thumbHeight = Math.max(20, (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight); // Min height of 20px
        
        scrollbarThumb.style.height = `${thumbHeight}px`;
        scrollbarThumb.style.top = `${(window.innerHeight - thumbHeight) * (scrollPercentage / 100)}px`;
    }

    // ===== ACTIVE NAVIGATION LINK HIGHLIGHTING =====
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"], .mobile-menu-list a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // ===== LAZY LOADING FOR IMAGES =====
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ===== PERFORMANCE OPTIMIZATION & SCROLLBAR LOGIC =====
    let scrollTimeout;
    function throttledScroll() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                handleScroll();
                highlightNavigation();
                updateScrollbar();
                
                document.body.classList.add('scrolling');
                clearTimeout(customScrollTimeout);
                customScrollTimeout = setTimeout(() => {
                    document.body.classList.remove('scrolling');
                }, 1000);

                scrollTimeout = null;
            }, 10);
        }
    }
    
    window.addEventListener('scroll', throttledScroll);
    window.addEventListener('resize', updateScrollbar);
    
    // ===== ACCESSIBILITY IMPROVEMENTS =====
    // Add keyboard navigation for mobile menu
    mobileMenuToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
    
    // Add focus management for lightbox
    lightbox.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
    
    // ===== INITIALIZATION =====
    // Set initial states
    handleScroll();
    highlightNavigation();
    updateScrollbar();
    
    // Add loading animation completion
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
});

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function smoothScrollTo(element, offset = 0) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}


