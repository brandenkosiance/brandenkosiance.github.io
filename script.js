document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    // Apply reveal to grid items and sub-page content
    const elementsToFade = document.querySelectorAll('.portfolio-item, .hero-box, .content-grid, .gallery img');
    elementsToFade.forEach(el => {
        el.classList.add('fade-init');
        revealOnScroll.observe(el);
    });

    // 2. Subtle Parallax Hover Effect
    // This makes the image inside the square move slightly in the opposite direction of the hover
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const img = item.querySelector('img');
            const rect = item.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            // Move image slightly based on mouse position
            img.style.transform = `scale(1.1) translate(${(x - 0.5) * 10}px, ${(y - 0.5) * 10}px)`;
        });

        item.addEventListener('mouseleave', (item) => {
            const img = item.target.querySelector('img');
            img.style.transform = `scale(1) translate(0, 0)`;
        });
    });

    // 3. Dynamic Footer Year
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} Branden Kosiance | Senior Mechanical Engineering Student`;
    }

    // 4. Handle Sub-page Navigation Transitions
    // Adds a slight fade-out effect when clicking a link for a "Single Page App" feel
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', (e) => {
                const destination = link.href;
                if (!destination.includes('#')) {
                    e.preventDefault();
                    document.body.style.opacity = '0';
                    setTimeout(() => {
                        window.location.href = destination;
                    }, 300);
                }
            });
        }
    });
});
