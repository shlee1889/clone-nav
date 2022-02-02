const tgBtn = document.querySelector(".nav-bar-toggle");
const menu = document.querySelector(".nav-bar-menu");
const sns = document.querySelector(".nav-bar-sns");


tgBtn.addEventListener('click', () => {
  menu.classList.toggle('invisible');
  sns.classList.toggle('invisible');
});