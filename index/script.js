// ===== PROFESSIONAL PORTFOLIO FEATURES =====
// Smooth scroll animations and professional interactions


// ===== PAGE LOAD ANIMATION =====
window.addEventListener('DOMContentLoaded', () => {
    // Add entrance animations to sections
    const sections = document.querySelectorAll('.contact-section, .education-section, .experience-section, .skills-section, .about-section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        setTimeout(() => {
            section.style.transition = 'all 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Add subtle hover effects to profile image
    const profileImg = document.querySelector('.header-with-image img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transform = 'scale(1.05)';
        });
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1)';
        });
    }
    
    // Add smooth scroll to contact links
    const contactLinks = document.querySelectorAll('.contact-details a[href^="mailto:"], .contact-details a[href^="tel:"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Visual feedback
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', () => {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        left: -9999px;
        z-index: 999;
    `;
    skipLink.addEventListener('focus', () => {
        skipLink.style.left = '20px';
        skipLink.style.top = '20px';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.style.left = '-9999px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Mark main content area
    const container = document.querySelector('.container');
    if (container) {
        container.id = 'main-content';
        container.setAttribute('role', 'main');
    }
});
