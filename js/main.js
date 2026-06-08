// Filter buttons functionality
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from siblings
        this.parentElement.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter villas if this is a villa filter button
        if (this.dataset.filter) {
            filterVillas('style', this.dataset.filter);
        }
    });
});

// Size button functionality
document.querySelectorAll('.size-button').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.size-button').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Filter villas function
function filterVillas(filterType, filterValue) {
    const villaCards = document.querySelectorAll('.villa-card');
    
    villaCards.forEach(card => {
        if (filterType === 'style') {
            if (card.dataset.villa === filterValue) {
                card.style.display = 'flex';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        }
    });
}

// Handle view gallery button
function handleViewGallery(villaName) {
    alert(`Gallery for ${villaName} would open here. This would typically open a lightbox or gallery view.`);
    console.log(`Opening gallery for: ${villaName}`);
}

// Handle availability check button
function handleAvailability(villaName) {
    alert(`Availability check for ${villaName}. This would open a booking calendar or availability form.`);
    console.log(`Checking availability for: ${villaName}`);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add smooth fade-in effect to villa cards on load
window.addEventListener('load', () => {
    const villaCards = document.querySelectorAll('.villa-card');
    villaCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.6s ease-in-out ${index * 0.1}s forwards`;
    });
});

// Add CSS animation for fade-in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .villa-card {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

console.log('Amaraith Reserve website loaded successfully!');