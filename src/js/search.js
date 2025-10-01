import { qs } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const searchForm = qs("#search-form");
    const searchInput = qs("#search-input");

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const query = searchInput.value.trim();
            // If empty, default to "all"
            const searchTerm = query === "" ? "all" : query;

            // relative path for GitHub Pages
            window.location.href = `product-listing.html?search=${encodeURIComponent(searchTerm)}`;
        });
    }
});
