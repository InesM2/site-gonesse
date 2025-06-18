// MENU BURGER
function toggleMenu() {
const sideMenu = document.getElementById('sideMenu');
if (sideMenu.style.left === '0px') {
sideMenu.style.left = '-250px';
overlay.style.display = 'none';
} else {
sideMenu.style.left = '0px';
overlay.style.display = 'block';
}
}

// SLIDER AUTOMATIQUE
let currentSlide = 0;
const slides = document.querySelectorAll("#main-slider .slide");

function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.remove("active");
if (i === index) {
slide.classList.add("active");
}
});
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // Change toutes les 4 sec

document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("form-soutien");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-popup");

if (form) {
form.addEventListener("submit", function (e) {
e.preventDefault();

const email = form.email.value;
const confirmEmail = form.confirm_email.value;

if (email !== confirmEmail) {
alert("Les emails ne correspondent pas.");
return;
}

popup.style.display = "block";
form.reset();
});
}

if (closeBtn) {
closeBtn.addEventListener("click", function () {
popup.style.display = "none";
});
}
});