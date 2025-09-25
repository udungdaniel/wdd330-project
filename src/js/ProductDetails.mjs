import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // Load product from data source
    this.product = await this.dataSource.findProductById(this.productId);

    // Render product
    this.renderProductDetails();

    // Add event listener to the "Add to Cart" button
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }

  addProductToCart() {
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", cartItems);
    alert("Product added to cart!");
  }

  renderProductDetails() {
    const container = document.querySelector(".product-detail");
    container.innerHTML = `
      <section class="product-card">
        <h2>${this.product.Brand.Name}</h2>
        <h3>${this.product.NameWithoutBrand}</h3>
        <img id="productImage" src="${this.product.Images.PrimaryExtraLarge}" alt="${this.product.NameWithoutBrand}" />
        <p id="p-price">$${this.product.FinalPrice}</p>
        <p id="p-color">${this.product.Colors[0].ColorName}</p>
        <p id="p-description">${this.product.DescriptionHtmlSimple}</p>
        <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
      </section>
    `;
  }
}
