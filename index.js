let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slider .slide');

function nextSlide() {
    // Hide current slide
    slides[currentSlideIndex].classList.remove('active');
    
    // Move to next index
    currentSlideIndex++;
    
    // If we reach the end, go back to the first image
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    
    // Show new slide
    slides[currentSlideIndex].classList.add('active');
}

// Optional: Auto-slide every 5 seconds
// setInterval(nextSlide, 5000);