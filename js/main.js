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

        accordionButton.classList.toggle("active");
        panel.classList.toggle("show");
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


