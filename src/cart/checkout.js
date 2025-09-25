import { loadHeaderFooter } from "../js/utils.mjs";

// Load header and footer, then update cart count
loadHeaderFooter().then(() => {
  const cart = JSON.parse(localStorage.getItem("so-cart")) || [];
  const sup = document.getElementById("cart-count");
  if (sup) {
    sup.textContent = cart.length;
  }
});
