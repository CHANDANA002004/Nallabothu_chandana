/**
 * Portfolio Website Logic - Nallabothu Chandana
 * Pure Vanilla JavaScript (GitHub Pages Compatible)
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DYNAMIC COPYRIGHT YEAR
       ========================================================================== */
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    /* ==========================================================================
       2. MOBILE HAMBURGER MENU & NAV CLOSE BEHAVIOR
       ========================================================================== */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a navigation link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* ==========================================================================
       3. ACTIVE NAVIGATION LINK ON SCROLL
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href*="#${sectionId}"]`);

            if (correspondingLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    correspondingLink.classList.add('active');
                } else {
                    correspondingLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveNavLink);

    /* ==========================================================================
       4. TESTIMONIAL CAROUSEL
       ========================================================================== */
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot-nav');

    if (track && prevBtn && nextBtn && dots.length > 0) {
        let currentSlide = 0;
        const totalSlides = dots.length;

        function updateCarousel(slideIndex) {
            track.style.transform = `translateX(-${slideIndex * 100}%)`;
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === slideIndex);
            });
            currentSlide = slideIndex;
        }

        nextBtn.addEventListener('click', () => {
            let nextIndex = (currentSlide + 1) % totalSlides;
            updateCarousel(nextIndex);
        });

        prevBtn.addEventListener('click', () => {
            let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel(prevIndex);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateCarousel(index);
            });
        });

        // Optional: Auto-slide every 7 seconds
        setInterval(() => {
            let nextIndex = (currentSlide + 1) % totalSlides;
            updateCarousel(nextIndex);
        }, 7000);
    }

    /* ==========================================================================
       5. INTERACTION & HOVER ANIMATION EFFICIENCY
       ========================================================================== */
    const cards = document.querySelectorAll('.skill-card, .project-card, .cert-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease, border-color 0.3s ease';
        });
    });

});