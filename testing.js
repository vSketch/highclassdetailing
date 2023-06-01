const menu = document.querySelector("body > div.nav-wrapper > div > div.menu")
const burger = document.querySelector("body > div.nav-wrapper > div > div.logo-hamburger > div.hamburger")

burger.addEventListener('click', () => {
    menu.classList.toggle("active")
;})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("active")
}))