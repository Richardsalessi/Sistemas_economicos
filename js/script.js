// Inicialización de las animaciones al hacer scroll (AOS Library)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800, 
        easing: 'ease-in-out', 
        once: false, 
        mirror: true 
    });

    // Efecto de máquina de escribir (Typed.js)
    if (document.getElementById('typed-title')) {
        new Typed('#typed-title', {
            strings: ['Sistema Económico de <span class="text-sweden-yellow">Suecia</span>', 'El Modelo <span class="text-sweden-yellow">Nórdico</span>'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Barra de progreso de lectura (Scroll Progress)
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    });

    // Código para el menú de navegación (cambiar color al hacer scroll)
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.replace('bg-white/95', 'bg-white');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.replace('bg-white', 'bg-white/95');
        }
    });
});
