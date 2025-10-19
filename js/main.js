const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const darkBtn = document.getElementById("darkBtn");
const cartBtn = document.getElementById("cartBtn");
const cart = document.getElementById("cart");

// Hamburger ishlashi
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// Dark mode
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Savatcha ochilishi
cartBtn.addEventListener("click", () => {
  cart.classList.toggle("active");
});
