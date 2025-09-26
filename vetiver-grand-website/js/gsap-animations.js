// ===== GSAP PROFESSIONAL ANIMATIONS =====
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ===== PAGE LOAD ANIMATIONS =====
window.addEventListener('load', () => {
    // Initial setup - hide elements that will be animated
    gsap.set('.hero-title-animate', { y: 100, opacity: 0 });
    gsap.set('.hero-subtitle-animate', { y: 50, opacity: 0 });
    gsap.set('.hero-btn-animate', { y: 30, opacity: 0, scale: 0.8 });
    gsap.set('.logo-animate', { y: -50, opacity: 0 });
    gsap.set('.nav-item', { y: -30, opacity: 0 });
    gsap.set('.book-btn', { scale: 0, opacity: 0 });
    gsap.set('.floating-circle', { scale: 0, opacity: 0 });
    
    // Hero entrance animation timeline
    const heroTl = gsap.timeline({ delay: 0.5 });
    
    heroTl
        .to('.logo-animate', { 
            duration: 1.2, 
            y: 0, 
            opacity: 1, 
            ease: "power3.out" 
        })
        .to('.nav-item', { 
            duration: 0.8, 
            y: 0, 
            opacity: 1, 
            stagger: 0.1, 
            ease: "power2.out" 
        }, "-=0.8")
        .to('.book-btn', { 
            duration: 0.6, 
            scale: 1, 
            opacity: 1, 
            ease: "back.out(1.7)" 
        }, "-=0.4")
        .to('.hero-title-animate', { 
            duration: 1.5, 
            y: 0, 
            opacity: 1, 
            ease: "power3.out" 
        }, "-=0.2")
        .to('.hero-subtitle-animate', { 
            duration: 1, 
            y: 0, 
            opacity: 1, 
            ease: "power2.out" 
        }, "-=1")
        .to('.hero-btn-animate', { 
            duration: 0.8, 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            ease: "back.out(1.7)" 
        }, "-=0.5")
        .to('.floating-circle', { 
            duration: 1, 
            scale: 1, 
            opacity: 0.6, 
            stagger: 0.2, 
            ease: "power2.out" 
        }, "-=0.3");
});

// ===== FLOATING ELEMENTS ANIMATION =====
gsap.to('.circle-1', {
    duration: 4,
    x: 100,
    y: -50,
    rotation: 360,
    ease: "none",
    repeat: -1,
    yoyo: true
});

gsap.to('.circle-2', {
    duration: 6,
    x: -80,
    y: 60,
    rotation: -360,
    ease: "none",
    repeat: -1,
    yoyo: true
});

gsap.to('.circle-3', {
    duration: 5,
    x: 60,
    y: -80,
    rotation: 180,
    ease: "none",
    repeat: -1,
    yoyo: true
});

// ===== SCROLL-TRIGGERED ANIMATIONS =====

// Pillars Section - Staggered entrance
gsap.fromTo('.pillar-item', 
    { 
        y: 100, 
        opacity: 0, 
        scale: 0.8 
    },
    {
        duration: 0.8,
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.pillars',
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    }
);

// Celebrations Section
gsap.fromTo('.celebrations-header', 
    { 
        y: 80, 
        opacity: 0 
    },
    {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.celebrations-header',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo('.celebrations-tabs', 
    { 
        scale: 0.8, 
        opacity: 0, 
        rotationY: 15 
    },
    {
        duration: 1,
        scale: 1,
        opacity: 1,
        rotationY: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.celebrations-tabs',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

// Venue items with stagger
gsap.fromTo('.venue-item', 
    { 
        x: -50, 
        opacity: 0 
    },
    {
        duration: 0.6,
        x: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.venue-list',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

// Rooms Section - Parallax effect
gsap.to('.rooms-bg', {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: '.rooms',
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

gsap.fromTo('.rooms-content', 
    { 
        y: 100, 
        opacity: 0 
    },
    {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.rooms-content',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

// Wellness Section
gsap.fromTo('.wellness .section-title', 
    { 
        y: 60, 
        opacity: 0 
    },
    {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.wellness .section-title',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo('.wellness-item', 
    { 
        y: 80, 
        opacity: 0, 
        scale: 0.9 
    },
    {
        duration: 1,
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.wellness-grid',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

// Restaurant Section - Split animation
gsap.fromTo('.restaurant-image', 
    { 
        x: -100, 
        opacity: 0, 
        rotationY: -15 
    },
    {
        duration: 1,
        x: 0,
        opacity: 1,
        rotationY: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.restaurant-image',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo('.restaurant-text', 
    { 
        x: 100, 
        opacity: 0, 
        rotationY: 15 
    },
    {
        duration: 1,
        x: 0,
        opacity: 1,
        rotationY: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.restaurant-text',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

// Gallery Section
gsap.fromTo('.gallery .section-title', 
    { 
        y: 60, 
        opacity: 0 
    },
    {
        duration: 0.8,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.gallery .section-title',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

const galleryTrack = document.querySelector('.gallery-track');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryHorizontalScroll = document.querySelector('.gallery-horizontal-scroll');
const header = document.querySelector('.header');

// Calculate the total width of the gallery track
function getScrollAmount() {
    let galleryTrackWidth = galleryTrack.scrollWidth;
    return -(galleryTrackWidth - window.innerWidth);
}

gsap.to(galleryTrack, {
    x: getScrollAmount,
    duration: 3,
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery-horizontal-scroll",
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onEnter: () => {
            gsap.to(header, { y: '-100%', duration: 0.5, ease: 'power2.out' });
        },
        onLeave: () => {
            gsap.to(header, { y: '0%', duration: 0.5, ease: 'power2.in' });
        },
        onEnterBack: () => {
            gsap.to(header, { y: '-100%', duration: 0.5, ease: 'power2.out' });
        },
        onLeaveBack: () => {
            gsap.to(header, { y: '0%', duration: 0.5, ease: 'power2.in' });
        }
    }
});

// Staggered fade-in animation for gallery items
gsap.fromTo(galleryItems, 
    { 
        opacity: 0, 
        scale: 0.8 
    },
    {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".gallery-horizontal-scroll",
            start: "top center",
            toggleActions: "play none none reverse"
        }
    }
);

// Contact Section
gsap.fromTo('.contact-map', 
    { 
        x: -80, 
        opacity: 0 
    },
    {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.contact-map',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo('.contact-form-container', 
    { 
        x: 80, 
        opacity: 0 
    },
    {
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.contact-form-container',
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    }
);

// ===== HEADER SCROLL EFFECT =====
ScrollTrigger.create({
    start: "top -100",
    end: 99999,
    toggleClass: {className: "scrolled", targets: ".header"}
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: target,
                ease: "power3.inOut"
            });
        }
    });
});

// ===== TEXT REVEAL ANIMATION =====
function splitTextIntoSpans(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const text = element.textContent;
        const words = text.split(' ');
        element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
    });
}

// Apply text splitting to hero title
splitTextIntoSpans('.hero-title-animate');

// Animate each word in hero title
gsap.fromTo('.hero-title-animate .word', 
    { 
        y: 100, 
        opacity: 0, 
        rotationX: 90 
    },
    {
        duration: 1,
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.5
    }
);

// ===== PERFORMANCE OPTIMIZATION =====
// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.1);
}
