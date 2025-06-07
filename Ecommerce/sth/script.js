// script.js
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Xử lý thêm vào giỏ hàng
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = cart.findIndex((item) => item.name === name);
      if (index > -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`Đã thêm "${name}" vào giỏ hàng.`);
    });
  });
});
