document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los elementos que queremos animar al hacer scroll
    const elementosAnimables = document.querySelectorAll('.benefit-item, .pdf-summary-box, .testimonial-card, .video-container, .program-summary, .final-cta');

    // Les agregamos la clase oculta inicial
    elementosAnimables.forEach(el => el.classList.add('hidden'));

    // Creamos el observador para saber cuándo entran en la pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Dejamos de observar el elemento una vez que ya apareció
                observer.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    // Empezamos a observar los elementos
    elementosAnimables.forEach(el => observer.observe(el));
});