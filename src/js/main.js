// Moves product rendering logic to a new file
import { loadHeaderFooter } from "./utils.mjs";
import { updateProductCards } from "./product-listing.js";

loadHeaderFooter();
updateProductCards();

setTimeout(() => {
  const cart = JSON.parse(localStorage.getItem("so-cart")) || [];
  const sup = document.getElementById("cart-count");
  sup.innerHTML = cart.length;
}, 2000);

// Render discounts for homepage products
