let ScrollToTop = document.querySelector("#ScrollToTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    ScrollToTop.style.display = "block";
  } else {
    ScrollToTop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const menu = document.querySelector("body > div.nav-wrapper > div > div.menu")
const burger = document.querySelector("body > div.nav-wrapper > div > div.logo-hamburger > div.hamburger")

burger.addEventListener('click', () => {
    menu.classList.toggle("active")
;})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active")
}))

const qaas = document.querySelector("#q\\&a > div.qaas-question")
const qaasa = document.querySelector("#q\\&a > div.qaas-answer")
qaas.addEventListener('click', () => {
    qaasa.classList.toggle("open")
;})

document.querySelectorAll("qaasa").forEach(n => n.addEventListener("click", () => {
    qaasa.classList.remove("open")
}))