// open menu when hamburger clicked
const toggleButton = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

// close menu when one of nav link clicked

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  // When we click on each nav-link, we remove the active class
  navLinks.classList.remove('active');
}

// navLink.forEach(function(n) {
//   n.addEventListener('click', linkAction);
// });
navLink.forEach(n => n.addEventListener('click', linkAction));
