import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("tents");
<<<<<<< HEAD
const productListElement = document.querySelector(".product-list");
const productList = new ProductList("tents", dataSource, productListElement);
productList.init();

<script src="js/main.js" type="module"></script>
=======

const element = document.querySelector(".product-list");

const productList = new ProductList("Tents", dataSource, element);

productList.init();
>>>>>>> 5324ca779c6c1c4940644e5c05b4e7a7109b34f6
