// Moves product rendering logic to a new file
import { loadHeaderFooter } from "./utils.mjs";
import { updateProductCards } from "./product-listing.js";

<<<<<<< HEAD
loadHeaderFooter();
updateProductCards();
=======
const dataSource = new ProductData("tents");
<<<<<<< HEAD
const productListElement = document.querySelector(".product-list");
const productList = new ProductList("tents", dataSource, productListElement);
productList.init();

<script src="js/main.js" type="module"></script>
=======
>>>>>>> b7f42389af5151f838d3a43fb8e2e8d037072cf3


    setTimeout(() => {
    const cart = JSON.parse(localStorage.getItem("so-cart")) || [];
    const sup = document.getElementById("cart-count");
        sup.innerHTML = cart.length;
    }, 2000);

<<<<<<< HEAD
// Render discounts for homepage products
=======
productList.init();
<<<<<<< HEAD
=======
>>>>>>> 5324ca779c6c1c4940644e5c05b4e7a7109b34f6
>>>>>>> cf237d8617a28cf1fbd276d7658ce0ceddaf7765
>>>>>>> b7f42389af5151f838d3a43fb8e2e8d037072cf3
