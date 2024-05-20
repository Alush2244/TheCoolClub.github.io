const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
// ... existing code from script.js ...

function slide() {
    const imgSlider = document.querySelector(".img-slider");
    const images = imgSlider.querySelectorAll("img");
    let currentImageIndex = 0;
  
    setInterval(() => {
      // Reset image positions and transition duration
      images.forEach((image, index) => {
        image.style.left = `${index * 100}%`;
        image.style.transitionDuration = "0s";
      });
  
      // Update current image index
      currentImageIndex = (currentImageIndex + 1) % images.length;
  
      // Apply transition and position for next image
      const nextImage = images[currentImageIndex];
      nextImage.style.transitionDuration = "1s";
      nextImage.style.left = "0px";
    }, 3000); // Set interval duration as needed (e.g., 3000ms = 3 seconds)
  }
  
  // Call the slide function to initiate animation
  slide();
  
  function scrollToFooter() {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  }

// Social Media Buttons