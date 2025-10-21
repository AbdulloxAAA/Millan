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
//aaaaaaa
// === KORZINA FUNKSIYASI ===

const cartBox = document.getElementById("cartBox");
const cartItems = document.getElementById("cartItems");
const emptyMsg = document.getElementById("emptyMsg");
const cartCount = document.getElementById("cartCount");

let itemCount = 0;

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("open");
});

document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    const img = card.querySelector("img").src;
    const title = card.querySelector("h3").textContent;
    const price = card.querySelector(".price").textContent;

    emptyMsg.style.display = "none";
    itemCount++;
    cartCount.textContent = itemCount;

    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <img src="${img}" alt="${title}">
      <div class="info">
        <h4>${title}</h4>
        <span>${price}</span>
      </div>
    `;
    cartItems.appendChild(item);
  });
});

// === CAROUSEL FUNKSIYASI ===
const productsContainer = document.getElementById("products");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = document.querySelector(".product-card").offsetWidth + 20;
  productsContainer.style.transform = `translateX(-${
    currentIndex * cardWidth
  }px)`;
}

nextBtn.addEventListener("click", () => {
  const maxIndex =
    productsContainer.children.length - (window.innerWidth <= 900 ? 2 : 4);
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);
///////aaaaaaa
// const swiper = new Swiper(".categoriesSwiper", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 20,
//     },
//   },
// });
