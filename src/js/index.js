// Select the element you want to animate
const elementToAnimate = document.querySelector(".animate-on-scroll");

// Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the animation class when the element is in view
      elementToAnimate.classList.add("animate");
      // Stop observing once the animation is triggered
      observer.unobserve(entry.target);
    }
  });
});

// Start observing the element
observer.observe(elementToAnimate);
