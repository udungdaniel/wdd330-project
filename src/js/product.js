import { getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { addToCart } from "./cart.js"; // fixed import name

// Grab the product id from the URL (?product=...)
const productId = getParam("product");

// Find the matching product in the inventory
const product = await findProductById(productId);

// Render product details on the page
function renderProductDetails(product) {
    const container = document.querySelector(".product-detail");

    if (!product) {
        if (container) {
            container.innerHTML = "<p>Sorry, product not found.</p>";
        }
        return;
    }

    // Safe DOM updates
    document.getElementById("productBrand").textContent = product.Brand || "";
    document.getElementById("productName").textContent = product.Name || "";
    document.getElementById("productImage").src = product.Image || "";
    document.getElementById("productImage").alt = product.Name || "Product image";
    document.getElementById("productPrice").textContent = `$${product.FinalPrice?.toFixed(2) || "0.00"}`;

    // Handle Colors array safely
    const colors = Array.isArray(product.Colors)
        ? product.Colors.map(c => c.ColorName || c).join(", ")
        : "N/A";
    document.getElementById("productColor").textContent = colors;

    document.getElementById("productDesc").textContent = product.Description || "";

    // Add to cart button logic
    const addBtn = document.getElementById("addToCart");
    if (addBtn) {
        addBtn.dataset.id = product.Id;
        addBtn.addEventListener("click", () => {
            addToCart(product); // pass full product, not just Id
            alert(`${product.Name} added to cart!`);
        });
    }
}

renderProductDetails(product);
