import "../scss/main.scss";

export default function menuToggle() {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("toggle");
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}

const rubberBand = setTimeout(animateHero, 0)
function animateHero() {
    const middleText = document.querySelector('#hero');
    middleText.classList.add('animate__animated', 'animate__rubberBand')
}
const shakeBand = setTimeout(animateHeroShake, 3000)
function animateHeroShake() {
    const lastTextInHero = document.querySelector('#hero p:last-child');
    lastTextInHero.classList.add('animate__animated', 'animate__flipInY');
}