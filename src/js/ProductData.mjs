// Utility function to convert a fetch response to JSON
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

// ProductData class
export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`; // adjust path if needed
  }

  // Fetch data for this category
  async getData() {
    try {
      const response = await fetch(this.path);
      return convertToJson(response);
    } catch (err) {
      console.error("Error loading product data:", err);
      return [];
    }
  }

  // Find a single product by ID
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}
