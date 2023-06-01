const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const ScrollToTop = document.querySelector("#ScrollToTop");

ScrollToTop.addEventListener("click", function () {
    console.log("SET");
    $("html, body").animate({ scrollTop: 0}, "slow")
})

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