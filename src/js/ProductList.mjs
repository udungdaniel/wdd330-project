import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `
    <li class="product-card">
<<<<<<< HEAD
      <a href="/product_pages/?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="${product.Name}">
        <h3>${product.Brand.Name}</h3>
        <p>${product.NameWithoutBrand}</p>
=======
<<<<<<< HEAD
      <a href="product_pages/${product.Id.toLowerCase()}.html">
        <img src="${product.Image}" alt="${product.Name}" />
        <h3 class="card__brand">${product.Brand?.Name || ""}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>
  `;
=======
      <a href="product_pages/?products=${product.Id}">
        <img src="${product.Image}" alt="${product.Name}">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.Name}</h3>
>>>>>>> b7f42389af5151f838d3a43fb8e2e8d037072cf3
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>
    `;
>>>>>>> 5324ca779c6c1c4940644e5c05b4e7a7109b34f6
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
    document.querySelector(".title").textContent = this.category;
  }

  renderList(list) {
<<<<<<< HEAD
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
=======
    // const htmlStrings = list.map(productCardTemplate);
    // this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));

    // apply use new utility function instead of the commented code above
    renderListWithTemplate(productCardTemplate, this.listElement, list);

  }

>>>>>>> 5324ca779c6c1c4940644e5c05b4e7a7109b34f6
}