// src/js/product.js
import { getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { addProductToCart } from "./cart.js";

// Grab the product id from the URL (?product=...)
const productId = getParam("product");

// Find the matching product in the inventory
const product = await findProductById(productId);

// Render product details on the page
function renderProductDetails(product) {
    if (!product) {
        document.querySelector(".product-detail").innerHTML =
            "<p>Sorry, product not found.</p>";
        return;
    }

    document.getElementById("productBrand").textContent = product.Brand;
    document.getElementById("productName").textContent = product.Name;
    document.getElementById("productImage").src = product.Image;
    document.getElementById("productImage").alt = product.Name;
    document.getElementById("productPrice").textContent = `$${product.FinalPrice}`;
    document.getElementById("productColor").textContent = product.Colors.join(", ");
    document.getElementById("productDesc").textContent = product.Description;

    // set the productId on the button
    const addBtn = document.getElementById("addToCart");
    addBtn.dataset.id = product.Id;
    addBtn.addEventListener("click", () => {
        addProductToCart(product.Id);
        alert(`${product.Name} added to cart!`);
    });
}

renderProductDetails(product);
