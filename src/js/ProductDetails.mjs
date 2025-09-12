// src/js/ProductDetails.mjs
import { setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.dataSource = dataSource;
    this.product = {}; // will be filled after fetching
  }

  /**
   * Initialize:
   * - fetch product by ID
   * - render details
   * - attach "Add to Cart" event
   */
  async init() {
    try {
      // ✅ fetch product details
      this.product = await this.dataSource.findProductById(this.productId);

      if (!this.product) {
        console.error(`❌ No product found for ID: ${this.productId}`);
        return;
      }

      // ✅ render details
      this.renderProductDetails();

      // ✅ attach Add to Cart listener
      const addBtn = document.getElementById("addToCart");
      if (addBtn) {
        addBtn.addEventListener("click", this.addProductToCart.bind(this));
      } else {
        console.warn("⚠️ No #addToCart button found in DOM.");
      }
    } catch (err) {
      console.error("❌ Error initializing ProductDetails:", err);
    }
  }

  /**
   * Add product to cart in localStorage
   */
  addProductToCart() {
    let cart = JSON.parse(localStorage.getItem("so-cart"));

    if (!cart) {
      cart = [];
    } else if (!Array.isArray(cart)) {
      cart = [cart];
    }

    cart.push(this.product);
    setLocalStorage("so-cart", cart);

    console.log(`✅ Added "${this.product.Name}" to cart`);
  }

  /**
   * Render product details into #product-details
   */
  renderProductDetails() {
    const container = document.querySelector("#product-details");

    if (!container) {
      console.error("❌ No #product-details container found in HTML.");
      return;
    }

    container.innerHTML = `
      <div class="product-detail-card">
        <h2 class="product-title">${this.product.Name}</h2>
        <img 
          src="${this.product.Image}" 
          alt="${this.product.Name}" 
          class="product-image"
        >
        <p class="product-description">${this.product.Description}</p>
        <p class="product-price"><strong>Price:</strong> $${this.product.FinalPrice}</p>
        <button id="addToCart" class="add-to-cart-btn">Add to Cart</button>
      </div>
    `;

    console.log(`🎨 Rendered details for: ${this.product.Name}`);
  }
}
