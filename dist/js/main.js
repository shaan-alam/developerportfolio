const menuBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector(".nav-links");
const lines = document.querySelectorAll(".line");

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  lines.forEach(line => line.classList.toggle('close'))
});
