import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (cartItems) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");

    prices();
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function prices() {
  let priceTotal;
  const cartItems = getLocalStorage("so-cart");
  priceTotal = cartItems.reduce((priceTotal, element) => 
    priceTotal + element.ListPrice, 0);
  console.log(priceTotal)
  const product = document.querySelector('.products');

  if (product) {
    const totalDiv = document.createElement("div");
    totalDiv.style.backgroundColor = "black";
    totalDiv.style.color = "white";
    const total = document.createElement("p");
    total.innerHTML = `Total Price = $${priceTotal > 0 ? priceTotal : 0}`;
    totalDiv.append(total);
    product.appendChild(totalDiv);
  }
}

renderCartContents();

