
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuBtn = document.querySelector('.menu-btn');
    
    navMenu.classList.toggle('show');
    
    if (navMenu.classList.contains('show')) {
        menuBtn.innerHTML = '✕ Fermer';
    } else {
        menuBtn.innerHTML = '☰ Menu';
    }
}

document.querySelectorAll('nav ol li a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        const menuBtn = document.querySelector('.menu-btn');
        
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('show');
            menuBtn.innerHTML = '☰ Menu';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            
            // Récupérer la catégorie sélectionnée
            const filterValue = button.getAttribute('data-filter');
            
            // Filtrer les projets
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Animation d'apparition
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    console.log('Données du formulaire :', data);
    this.reset();
});

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section, .project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

window.addEventListener('resize', function() {
    const navMenu = document.getElementById('nav-menu');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (window.innerWidth > 768) {
        navMenu.classList.remove('show');
        if (menuBtn) menuBtn.innerHTML = '☰ Menu';
    }
});