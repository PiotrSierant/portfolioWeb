import "../scss/main.scss"; /* import css style */
import party from "party-js";

const page = document.querySelector(".page");
const toggle = page.querySelector(".toggle-input");
const toggleIcon = page.querySelector(".toggle-icon");
toggleIcon.src = "public/images/sun.svg";
const logo = document.querySelector('.logo');
logo.src = "public/images/logo.svg";

/* Menu toggle */
function menuToggle() {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("toggle");
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}

const nav = document.querySelector('nav')
const li = nav.querySelectorAll('li');
li.forEach((element) => {
    element.addEventListener('click', menuToggle)})
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
        toggleIcon.src = "public/images/moon.svg";
    } else {
        toggleIcon.src = "public/images/sun.svg";
    }
}
function isTrue(value) {
    /* convert string to boolean */
    return value === "true";
}
/* Toggle theme any time the state of the checkbox changes */
toggle.addEventListener("change", toggleTheme);

const darkpink = document.querySelector('#darkpink');
const yellow = document.querySelector('#yellow');
const darkblue = document.querySelector('#darkblue');
const turkus = document.querySelector('#turkus');

function changeColor(event) {
    if(event.srcElement.id === 'darkpink') {
        document.documentElement.style.setProperty('--primary', '#C8566B');
        logo.src = "public/images/logo_darkpink.svg";
    }
    if (event.srcElement.id === 'yellow') {
        document.documentElement.style.setProperty('--primary', '#F6DA70');
        logo.src = "public/images/logo_yellow.svg";
    }
    if (event.srcElement.id === 'turkus') {
        document.documentElement.style.setProperty('--primary', '#4CDBA6');
        logo.src = "public/images/logo_turkus.svg";
    }
    if (event.srcElement.id === 'darkblue') {
        document.documentElement.style.setProperty('--primary', '#6661AB');
        logo.src = "public/images/logo_darkblue.svg";
    }
    party.confetti(this);
}
darkpink.addEventListener('click', changeColor)
yellow.addEventListener('click', changeColor)
darkblue.addEventListener('click', changeColor)
turkus.addEventListener('click', changeColor)
