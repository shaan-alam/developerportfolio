const menuBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector(".nav-links");
const lines = document.querySelectorAll(".line");
const darkModeBtn = document.querySelector('#dark-mode');
let darkMode = false;

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  lines.forEach(line => line.classList.toggle('close'))
});


darkModeBtn.addEventListener('click', e => {
  e.preventDefault();
  
  if (!darkMode) {
    document.body.classList.add('dark-body')    ;
    darkModeBtn.innerHTML = 'Light Mode';
    document.getElementById('aboutme').background = '../img/waves-dark.png';
    darkMode = true;
    localStorage.setItem('dark-mode', 'true');
  } else {
    document.body.classList.remove('dark-body')    ;
    darkModeBtn.innerHTML =  'Dark Mode';
    document.getElementById('aboutme').background = '../img/waves.png';
    darkMode = false;
    localStorage.setItem('dark-mode', 'false');
  }
});

window.addEventListener('load', () => {
  if (localStorage.getItem('dark-mode') && localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-body', 'dark-body-open');
  } else {
    document.body.classList.remove('dark-body');
  }
})
