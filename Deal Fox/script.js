document.addEventListener('DOMContentLoaded', function() {
    // Card reveal animation
    setTimeout(() => {
        const modelCard = document.querySelector('.card-model');
        const guitarCard = document.querySelector('.card-guitar');
        
        modelCard.style.animation = 'left-card-reveal 1s cubic-bezier(0.33, 1, 0.68, 1) forwards';
        guitarCard.style.animation = 'right-card-reveal 1s cubic-bezier(0.33, 1, 0.68, 1) forwards';
    }, 800);

    // Get all filter buttons and deal cards ONLY from the Weitere Deals section
    const filterButtons = document.querySelectorAll('.weitere-deals .filter-btn');
    const weitereDealsSection = document.querySelector('.weitere-deals');
    const dealCards = weitereDealsSection.querySelectorAll('.deal-card');

    // Add click event listeners to all filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter the cards
            filterCards(filterValue);
        });
    });

    // Function to filter cards with smooth transitions
    async function filterCards(category) {
        // Step 1: Fade out all currently visible cards
        const visibleCards = weitereDealsSection.querySelectorAll('.deal-card:not(.hidden)');
        await Promise.all([...visibleCards].map(card => {
            return new Promise(resolve => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
                setTimeout(resolve, 300); // Match this with CSS transition duration
            });
        }));

        // Step 2: Hide non-matching cards and prepare matching ones
        dealCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || category === cardCategory) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
            } else {
                card.classList.add('hidden');
            }
        });

        // Step 3: Trigger reflow to ensure transitions work
        weitereDealsSection.offsetHeight;

        // Step 4: Fade in matching cards
        const matchingCards = weitereDealsSection.querySelectorAll('.deal-card:not(.hidden)');
        matchingCards.forEach(card => {
            requestAnimationFrame(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        });
    }

    // Initialize all cards as visible
    dealCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.classList.remove('hidden');
    });

    // Video Player Functionality
    const video = document.getElementById('howItWorksVideo');
    const playButton = document.getElementById('playButton');

    if (video && playButton) {
        playButton.addEventListener('click', () => {
            video.play();
            playButton.classList.add('hidden');
        });

        video.addEventListener('pause', () => {
            playButton.classList.remove('hidden');
        });

        video.addEventListener('play', () => {
            playButton.classList.add('hidden');
        });
    }

    // Intersection Observer for fade-in animation
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Initialize Swiper
    const testimonialSwiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        speed: 800,
        grabCursor: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active'
        }
    });
}); 
