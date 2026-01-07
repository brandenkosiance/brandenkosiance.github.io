document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToFade = document.querySelectorAll('.portfolio-item, .hero-box, .content-grid, .gallery img');
    elementsToFade.forEach(el => {
        el.classList.add('fade-init');
        revealOnScroll.observe(el);
    });

    // Sub-page Navigation Transitions
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', (e) => {
                const destination = link.href;
                if (!destination.includes('#') && !link.target) {
                    e.preventDefault();
                    document.body.style.opacity = '0';
                    setTimeout(() => {
                        window.location.href = destination;
                    }, 300);
                }
            });
        }
    });

    // Dynamic Footer Year
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} Branden Kosiance | Senior Mechanical Engineering Student`;
    }
});
