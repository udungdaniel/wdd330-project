import { loadHeaderFooter, getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const searchQuery = getParam("search");

// Use ExternalServices instead of ProductData
const dataSource = new ExternalServices();
const element = document.querySelector(".product-list");
let listing;

if (searchQuery) {
    // If a search query is provided, use search mode
    listing = new ProductList(searchQuery, dataSource, element, true);
} else if (category) {
    // If category is provided, use category mode
    listing = new ProductList(category, dataSource, element, false);
} else {
    // fallback: load all products instead of defaulting to "tents"
    listing = new ProductList("all", dataSource, element, false);
}

listing.init();

// ---------------- Search form handler ----------------
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("#search-form");
    const searchInput = document.querySelector("#search-box");

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault(); // stop default reload

            const query = searchInput.value.trim();
            if (query) {
                // Redirect with search parameter
                window.location.href = `/product-listing.html?search=${encodeURIComponent(query)}`;
            } else {
                // If empty, just reload without forcing "tents"
                window.location.href = `/product-listing.html`;
            }
        });
    }
});
