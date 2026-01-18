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
const swiper = new Swiper('.swiper', {
  loop: true, // Allows infinite scrolling
  
  // This section activates the "Next" and "Prev" buttons
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // This adds the clickable dots at the bottom
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  // Keyboard control is a nice touch for desktop users
  keyboard: {
    enabled: true,
  },
});