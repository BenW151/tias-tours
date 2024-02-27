function toggleMenu() {
  var navigationItems = document.querySelector('.navigation-items');
  navigationItems.classList.toggle('nav-open');
}


document.addEventListener("DOMContentLoaded", function() {
  var accordionContainer = document.querySelector(".accordion-container");

  if (accordionContainer) {
    accordionContainer.addEventListener("click", function(event) {
      if (event.target.classList.contains("accordion")) {
        var accordionButton = event.target;
        var panel = accordionButton.nextElementSibling;

        if (panel.style.maxHeight) {
          // Panel is open, close it
          panel.style.maxHeight = null;
        } else {
          // Open the panel
          // First, we need to set maxHeight to 'none' to calculate the actual height
          panel.style.maxHeight = "none";
          var actualHeight = panel.scrollHeight + "px";
          // Then, reset the maxHeight to 0 before setting it to its actual height, to ensure animation plays
          panel.style.maxHeight = "0";
          // Using requestAnimationFrame to ensure the transition plays
          window.requestAnimationFrame(function() {
            panel.style.maxHeight = actualHeight;
          });
        }

        accordionButton.classList.toggle("active");
        panel.classList.toggle("show"); // This might be optional based on if you rely on this class for styling
      }
    });
  }
});


window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");

  if (window.innerWidth <= 768) { // Only for mobile screens
    if (window.scrollY > 0) {
      nav.classList.add("scrolled"); // Add a class when scrolled
    } else {
      nav.classList.remove("scrolled"); // Remove the class when at the top
    }
  }
});


