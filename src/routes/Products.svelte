<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from 'svelte';
  import { fetchProducts } from "../lib/api.js";

  const dispatch = createEventDispatcher();
  export let cart = [];
  let products = [];
  let loading = true;

  onMount(async () => {
    products = await fetchProducts();
    loading = false;
  });

  function handleAddToCart(product) {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description
    };
    dispatch('addToCart', productToAdd);
  }

  function navigate(route) {
    dispatch('navigate', route);
  }
</script>

<div class="products">
  <div class="header">
    <button class="back" on:click={() => navigate('home')}>← Go Back</button>
    <h1>Products</h1>
    <div class="cart-info">
      Items in cart: {cart.length}
    </div>
  </div>

  {#if loading}
    <div class="loader">Loading products...</div>
  {:else}
    <div class="product-grid">
      {#each products as product}
        <div class="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p class="price">${product.price}</p>
          <button on:click={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .products {
    padding: 1rem;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .cart-info {
    margin-left: auto;
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    border-radius: 4px;
  }

  .back {
    padding: 0.5rem 1rem;
    background-color: #666;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .loader {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .product-card {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }

  .price {
    font-weight: bold;
    color: #4CAF50;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>