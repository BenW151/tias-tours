//burger menu
function toggleMenu() {
  var navigationItems = document.querySelector('.navigation-items');
  navigationItems.classList.toggle('nav-open');
}



//accordion
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
          panel.style.maxHeight = "none";
          var actualHeight = panel.scrollHeight + "px";
          panel.style.maxHeight = "0";
          window.requestAnimationFrame(function() {
            panel.style.maxHeight = actualHeight;
          });
        }

        accordionButton.classList.toggle("active");
        panel.classList.toggle("show"); 
      }
    });
  }
});

//sticky nav bar on scroll
window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");

  if (window.innerWidth <= 768) { 
    if (window.scrollY > 0) {
      nav.classList.add("scrolled"); 
    } else {
      nav.classList.remove("scrolled"); 
    }
  }
});

//instagram widget PC/mobile
function adjustIframeSrc() {
  var iframe = document.getElementById('lightwidgetFrame');
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth <= 768) { 
    iframe.src = "//lightwidget.com/widgets/efbab0a9a2eb507f8e0bc297ae24055c.html";
  } else {
    iframe.src = "//lightwidget.com/widgets/1a06c33f58bd55069e91577c335a2fd4.html";
  }
}
window.addEventListener('load', adjustIframeSrc);
window.addEventListener('resize', adjustIframeSrc);
