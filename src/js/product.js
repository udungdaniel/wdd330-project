import { getParam } from "./utils.mjs";
import ProductData from "./productData.mjs";
import { addToCart } from "./cart.js";

// Grab the product id from the URL (?product=...)
const productId = getParam("product");

// Create an instance of ProductData (adjust "tents" if your category is different)
const dataSource = new ProductData("tents");

// Function to render product details
function renderProductDetails(product) {
  if (!product) {
    document.querySelector("#product-details").innerHTML =
      "<p>Product not found.</p>";
    return;
  }

  document.querySelector("#product-details").innerHTML = `
    <h2>${product.Name}</h2>
    <p>${product.Description}</p>
    <p><strong>Price:</strong> $${product.Price}</p>
    <button id="addToCart">Add to Cart</button>
  `;

  document.querySelector("#addToCart").addEventListener("click", () => {
    addToCart(productId);
  });
}

// ✅ Wrap async code here
async function init() {
  try {
    const product = await dataSource.findProductById(productId);
    renderProductDetails(product);
  } catch (err) {
    console.error("Error loading product:", err);
    document.querySelector("#product-details").innerHTML =
      "<p>There was an error loading the product.</p>";
  }
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", init);
