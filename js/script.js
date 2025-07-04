// MENU BURGER
function toggleMenu() {
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

if (sideMenu.style.left === "0px") {
sideMenu.style.left = "-250px";
overlay.style.display = "none";
} else {
sideMenu.style.left = "0px";
overlay.style.display = "block";
}
}
document.getElementById("overlay").addEventListener("click", function () {

  const sideMenu = document.getElementById("sideMenu");

  this.style.display = "none";

  sideMenu.style.left = "-250px";

  });


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

// Lance le slider toutes les x  secondes
setInterval(nextSlide, 7000);

// FORMULAIRE DE SOUTIEN (popup + vérification des emails)
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

function toggleTexte(button) {
const texte = button.previousElementSibling;
texte.classList.toggle("afficher");
button.textContent = texte.classList.contains("afficher") ? "Réduire" : "Lire la suite";
}
