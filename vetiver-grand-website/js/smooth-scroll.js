// Optimized smooth scroll implementation
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll class only when user clicks on navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.documentElement.classList.add('smooth-scroll');
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Remove smooth scroll class after animation
                setTimeout(() => {
                    document.documentElement.classList.remove('smooth-scroll');
                }, 1000);
            }
        });
    });

    // Optimize scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-in').forEach(el => {
        observer.observe(el);
    });
});