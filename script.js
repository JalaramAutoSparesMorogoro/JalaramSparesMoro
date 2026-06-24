  (function() {
    // Loader
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      if(loader) loader.classList.add('hidden');
    });

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    function toggleMenu() { mobileMenu.classList.toggle('open'); }
    if(hamburger) hamburger.addEventListener('click', toggleMenu);
    if(closeMenu) closeMenu.addEventListener('click', toggleMenu);
    if(mobileMenu) mobileMenu.addEventListener('click', (e) => { if (e.target === mobileMenu) toggleMenu(); });

    // Back to top
    const backTop = document.getElementById('backTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) backTop.classList.add('visible');
      else backTop.classList.remove('visible');
    });
    if(backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Scroll reveal (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section-title, .about-card, .category-item, .featured-card, .why-item, .testimonial-card, .inside-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your inquiry! Jalaram Auto Spares will get back to you shortly.');
        this.reset();
      });
    }

    // Smooth nav links configuration
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { 
          e.preventDefault(); 
          target.scrollIntoView({ behavior: 'smooth' }); 
        }
        if (mobileMenu && mobileMenu.classList.contains('open')) toggleMenu();
      });
    });
  })();