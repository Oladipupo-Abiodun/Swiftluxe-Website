function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active');
  }

  
  // Carousel Effect
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage() {
  // Hide current image
  images[currentIndex].style.opacity = '0';

  // Update index to show the next image
  currentIndex = (currentIndex + 1) % images.length;

  // Show next image
  images[currentIndex].style.opacity = '1';
}

// Set interval for image change every 5 seconds
setInterval(showNextImage, 5000);

// Initially display the first image
images[currentIndex].style.opacity = '1';
