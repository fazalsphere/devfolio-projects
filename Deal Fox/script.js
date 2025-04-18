document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and deal cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const dealCards = document.querySelectorAll('.deal-card');

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

    // Function to filter cards
    function filterCards(category) {
        // First, fade out all cards
        dealCards.forEach(card => {
            card.classList.add('hidden');
        });

        // Wait for fade out to complete
        setTimeout(() => {
            // Show relevant cards
            dealCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || category === cardCategory) {
                    // Remove hidden class to trigger fade in
                    card.classList.remove('hidden');
                }
            });
        }, 400); // Match this with CSS transition duration
    }

    // Show all cards initially
    dealCards.forEach(card => card.classList.remove('hidden'));

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
                fadeObserver.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
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