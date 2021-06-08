// open menu when hamburger clicked
const toggleButton = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', function() {
  navLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
});

// close menu when one of nav link clicked

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  navLinks.classList.remove('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// typing animation
const texts = ['a Frontend Developer', 'an UI designer', 'a Violinist'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();
