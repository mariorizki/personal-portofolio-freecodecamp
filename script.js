// open menu when hamburger clicked
const toggleButton = document.getElementById('hamburger');
const navBar = document.getElementById('navbar');

toggleButton.addEventListener('click', function() {
  navBar.classList.toggle('active');
  toggleButton.classList.toggle('active');
});

// close menu when one of nav link clicked

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  navBar.classList.remove('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
