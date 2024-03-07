//burger menu
function toggleMenu() {
  var navigationItems = document.querySelector('.navigation-items');
  navigationItems.classList.toggle('nav-open');
}

//destinations dropdown
function destinationsDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("navDropdown").classList.toggle("active");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//accordion
document.addEventListener("DOMContentLoaded", function() {
  var accordionContainer = document.querySelector(".accordion-container");

  if (accordionContainer) {
    accordionContainer.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent click from reaching the document
      if (event.target.classList.contains("accordion")) {
        var accordionButton = event.target;
        var panel = accordionButton.nextElementSibling;
        var isPanelOpen = panel.style.maxHeight && panel.style.maxHeight !== "0px";

        // Close all open panels first
        var allPanels = document.querySelectorAll(".accordion-container .accordion + *");
        allPanels.forEach(function(otherPanel) {
          otherPanel.style.maxHeight = null;
          otherPanel.previousElementSibling.classList.remove("active");
          otherPanel.classList.remove("show");
        });

        // If the panel was already open, it's now closed, so we're done.
        // Otherwise, open the clicked panel.
        if (!isPanelOpen) {
          accordionButton.classList.add("active");
          panel.classList.add("show");
          panel.style.maxHeight = "none";
          var actualHeight = panel.scrollHeight + "px";
          panel.style.maxHeight = "0";
          window.requestAnimationFrame(function() {
            panel.style.maxHeight = actualHeight;
          });
        }
      }
    });

    // Listen for clicks on the document
    document.addEventListener("click", function() {
      // Close all accordion panels
      var allPanels = document.querySelectorAll(".accordion-container .accordion + *");
      allPanels.forEach(function(panel) {
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.previousElementSibling.classList.remove("active");
          panel.classList.remove("show");
        }
      });
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
/*
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
window.addEventListener('resize', adjustIframeSrc);*/

//newsletter email input validation
document.addEventListener('DOMContentLoaded', function() {
  var emailInput = document.getElementById('mce-EMAIL');
  var submitButton = document.getElementById('mc-embedded-subscribe');
  var errorMessage = document.getElementById('email-error');
  
  function validateEmail() {
    var emailValue = emailInput.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern for validation
    
    if (emailValue === '') { // If email field is empty
      errorMessage.style.display = 'none'; // Hide error message
      submitButton.disabled = true; // Keep the Subscribe button disabled
    } else if (emailPattern.test(emailValue)) {
      errorMessage.style.display = 'none'; // Hide error message
      submitButton.disabled = false; // Enable the Subscribe button
    } else {
      errorMessage.style.display = 'block'; // Show error message
      submitButton.disabled = true; // Disable the Subscribe button
    }
  }
  
  emailInput.addEventListener('input', validateEmail);
  
  // Initialize on load
  validateEmail();
});
