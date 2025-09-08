import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // Get current cart (if any)
  let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

  // If nothing in localStorage, start with an empty array
  if (!cart) {
    cart = [];
  }
  // If cart is not already an array, wrap it in one
  else if (!Array.isArray(cart)) {
    cart = [cart];
  }
  //Add nee product
  cart.push(product);

  //Save updated cart
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
