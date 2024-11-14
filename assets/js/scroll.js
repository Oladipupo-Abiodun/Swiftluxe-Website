document.addEventListener("DOMContentLoaded", () => {
    const jar = document.getElementById("scrollJar");
    const liquid = document.getElementById("liquid");
    const scrollToTopButton = document.getElementById("scrollToTop");
  
    // Function to update the liquid height based on scroll progress
    const updateLiquid = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = Math.min(scrollPosition / (documentHeight - windowHeight), 1);
      liquid.style.height = `${scrollPercentage * 100}%`;
    };
  
    // Show the jar when scrolled down 5% of the page
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.05) {
        jar.classList.remove("hidden");
      } else {
        jar.classList.add("hidden");
      }
      updateLiquid();
    };
  
    // Scroll back to the top when the button is clicked
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Initial check to handle page load
    handleScroll();
  });
  