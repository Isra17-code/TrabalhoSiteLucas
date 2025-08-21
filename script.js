document.addEventListener('DOMContentLoaded', function() {

    const revealElements = document.querySelectorAll('.about-content, .character-card, .season-card');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    revealElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('load', checkReveal);
    window.addEventListener('scroll', checkReveal);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 50) {
            header.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
    
    const heroTitle = document.querySelector('.hero h2');
    const originalText = heroTitle.innerHTML;
    const textContent = originalText.replace(/<span>|<\/span>/g, '');
    let charIndex = 0;
    
    function typeEffect() {
        if (charIndex < textContent.length) {
            heroTitle.innerHTML = textContent.substring(0, charIndex + 1) + '<span>|</span>';
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            heroTitle.innerHTML = originalText;
        }
    }

    setTimeout(typeEffect, 1000);
});