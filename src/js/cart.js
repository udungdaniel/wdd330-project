import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const productList = document.querySelector(".product-list");
  const totalsDiv = document.getElementById("cart-totals");

  if (!productList) return; // safety check

  if (cartItems.length === 0) {
    productList.innerHTML =
      "<p>Your cart is empty at the moment, please make a purchase.</p>";
    if (totalsDiv) totalsDiv.innerHTML = ""; // clear totals
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  productList.innerHTML = htmlItems.join("");

  document.querySelectorAll(".remove-from-cart").forEach((btn) => {
    btn.addEventListener("click", removeFromCartHandler);
  });

  let originalTotal = 0;
  let discountedTotal = 0;
  cartItems.forEach((item) => {
    const qty = item.quantity || 1;
    const orig =
      item.SuggestedRetailPrice || item.ListPrice || item.FinalPrice || 0;
    const disc = item.FinalPrice || item.ListPrice || 0;
    originalTotal += orig * qty;
    discountedTotal += disc * qty;
  });
  const discountAmount = originalTotal - discountedTotal;

  if (totalsDiv) {
    totalsDiv.innerHTML = `
      <div class="cart-footer">
        <p class="cart-total">Total: <span class="old-price">${formatPrice(
      originalTotal
    )}</span></p>
        <p class="cart-total">Discount: <span class="discount-indicator">-${formatPrice(
      discountAmount
    )}</span></p>
        <p class="cart-total">To Pay: <span class="new-price">${formatPrice(
      discountedTotal
    )}</span></p>
      </div>
    `;
  }
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function cartItemTemplate(item) {
  let priceHtml = "";
  if (item.FinalPrice < item.SuggestedRetailPrice) {
    const percent = Math.round(
      ((item.SuggestedRetailPrice - item.FinalPrice) /
        item.SuggestedRetailPrice) *
      100
    );
    priceHtml = `<span class="discount">-${percent}% OFF</span> <span class="old-price">${formatPrice(
      item.SuggestedRetailPrice
    )}</span> <span class="new-price">${formatPrice(item.FinalPrice)}</span>`;
  } else {
    priceHtml = formatPrice(item.FinalPrice);
  }

  return `
  <li class="cart-card divider">
    <span class="remove-from-cart" data-id="${item.Id}" 
      style="cursor:pointer; color:red; float:right; font-weight:bold;">&times;</span>
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: ${item.quantity || 1}</p>
    <p class="cart-card__price">${priceHtml}</p>
  </li>`;
}

function removeFromCartHandler(e) {
  const idToRemove = e.target.dataset.id;
  let cart = getLocalStorage("so-cart") || [];
  const index = cart.findIndex((item) => String(item.Id) === String(idToRemove));
  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem("so-cart", JSON.stringify(cart));
    renderCartContents();
  }
}

export function addProductToCart(product) {
  let cart = getLocalStorage("so-cart") || [];
  const existingIndex = cart.findIndex(
    (item) => String(item.Id) === String(product.Id)
  );

  if (existingIndex !== -1) {
    cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("so-cart", JSON.stringify(cart));
  renderCartContents();
}

function emptyCartHandler() {
  localStorage.removeItem("so-cart");
  renderCartContents();
}

const emptyCartBtn = document.getElementById("emptyCart");
if (emptyCartBtn) {
  emptyCartBtn.addEventListener("click", emptyCartHandler);
}

renderCartContents();
