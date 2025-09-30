// js/search.js
import { renderListWithTemplate } from "./utils.mjs";
import ProductListing from "./ProductList.mjs";

document.getElementById("search-form")
    .addEventListener("submit", async (e) => {
        e.preventDefault();
        const query = document.getElementById("search-input").value.trim();

        // If empty, default to "all"
        const searchTerm = query === "" ? "all" : query;

        // Navigate to product list page with search param (must use "search")
        window.location.href = `/wdd330-project/product_listing/index.html?search=${encodeURIComponent(searchTerm)}`;
    });
