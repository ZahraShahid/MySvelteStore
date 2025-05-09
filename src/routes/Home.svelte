<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function navigate(route) {
    dispatch('navigate', route);
  }
</script>

<div class="home">
  <h1>Welcome to Our Store</h1>
  <div class="buttons">
    <button class="primary" on:click={() => navigate('products')}>Search Products</button>
    <button class="secondary" on:click={() => navigate('checkout')}>Checkout</button>
  </div>
</div>

<style>
  .home {
    text-align: center;
    padding: 2rem;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }

  button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  button:hover {
    transform: scale(1.05);
  }

  .primary {
    background-color: #4CAF50;
    color: white;
  }

  .secondary {
    background-color: #2196F3;
    color: white;
  }
</style>