document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. AUTO-UPDATE COPYRIGHT YEAR */
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Branden Kosiance`;
    }

    /* 2. SCROLL REVEAL ANIMATION */
    // This looks for any element with the class 'portfolio-item' or 'project-content'
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the item is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the bottom
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop watching once revealed
            }
        });
    }, observerOptions);

    // Target elements to animate
    const elementsToAnimate = document.querySelectorAll('.portfolio-item, .project-hero, .project-content, .gallery img');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-init'); // Add initial hidden state
        observer.observe(el);
    });
});
