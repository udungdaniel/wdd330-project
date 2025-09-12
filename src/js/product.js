// src/js/product.js

import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

// ✅ Get product ID from the URL
const productId = getParam("product");
console.log("🔍 Product ID from URL:", productId);

// ✅ Create data source for the "tents" category
const dataSource = new ProductData("tents");

// ✅ Initialize product details if a productId exists
if (productId) {
  const product = new ProductDetails(productId, dataSource);
  product.init();
} else {
  console.error("❌ No product ID found in URL.");
}
