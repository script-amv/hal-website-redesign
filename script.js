const upper = document.querySelector("header .upper");
const lower = document.querySelector("header .main-nav");
let last = window.scrollY;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  lower.classList.toggle("hidden", y > last);
  upper.classList.toggle("hidden", y > last);
  last = y;
}, { passive: true });

upper.addEventListener("mouseenter", () => {
  lower.classList.remove("hidden");
  upper.classList.remove("hidden");
});