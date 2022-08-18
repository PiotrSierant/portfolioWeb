import "../scss/main.scss"; /* import css style */

/* Menu toggle */
function menuToggle() {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("toggle");
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}
document.querySelector("#toggle").addEventListener("click", menuToggle);

/* Scroll down => header style */
window.onscroll = () => {scrollNavbar()};
const scrollNavbar = () => {
    const navBar = document.querySelector(".header");
    if (document.documentElement.scrollTop > 40) {
        navBar.classList.add("headerBackgroundScroll");
    } else {
        navBar.classList.remove("headerBackgroundScroll");
    }
}
/* animate hero text */
setTimeout(animateHero, 0);
function animateHero() {
    const middleText = document.querySelector('#hero');
    middleText.classList.add('animate__animated', 'animate__rubberBand')
}
setTimeout(animateHeroShake, 3000);
function animateHeroShake() {
    const lastTextInHero = document.querySelector('#hero p:last-child');
    lastTextInHero.classList.add('animate__animated', 'animate__flipInY');
}

const page = document.querySelector(".page");
const toggle = page.querySelector(".toggle-input");
const toggleIcon = page.querySelector(".toggle-icon");
/* set theme and localStorage on page load */
setCheckedState();
function setCheckedState() {
    /* checks if localStorage has a "checked" value set at all */
    if (!(localStorage.checked === undefined)) {
        /* if it does, it sets the state of the toggle accordingly */
        toggle.checked = isTrue(localStorage.getItem("checked"));
        /* after setting the toggle state, the theme is adjusted according to the checked state */
        toggleTheme();
    }
}
function toggleTheme() {
    /* Toggle theme based on state of checkbox */
    if (toggle.checked) {
        page.classList.replace("light", "dark");
    } else {
        page.classList.replace("dark", "light");
    }
    /* replace icons on page */
    toggleIconTheme();
    /* set the value of the "checked" key in localStorage */
    localStorage.setItem("checked", toggle.checked);
}
function toggleIconTheme() {
    /* Replace icons not able to be targeted by css variables */
    if (page.classList.contains("light")) {
        toggleIcon.src = "../images/moon.svg";
    } else {
        toggleIcon.src = "../images/sun.svg";
    }
}
function isTrue(value) {
    /* convert string to boolean */
    return value === "true";
}
/* Toggle theme any time the state of the checkbox changes */
toggle.addEventListener("change", toggleTheme);