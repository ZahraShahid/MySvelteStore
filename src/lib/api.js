const products = [
    { id: 1, name: "Product 1", price: 29.95, description: "Cap" },
    { id: 2, name: "Product 2", price: 39.50, description: "Belt" },
    { id: 3, name: "Product 3", price: 49.89, description: "Shoes" },
    { id: 4, name: "Product 4", price: 59.11, description: "Watch" },
    { id: 5, name: "Product 5", price: 69.66, description: "Glove" },
  ];
  
  export async function fetchProducts() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return products;
  }