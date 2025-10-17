const btn = document.querySelector(".hamburger");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  const expanded = btn.getAttribute("aria-expanded") === "true";

  // holatni almashtirish
  btn.setAttribute("aria-expanded", !expanded);
  menu.setAttribute("aria-hidden", expanded);

  // classlarni almashtirish
  btn.classList.toggle("active");
  menu.classList.toggle("open");
});
