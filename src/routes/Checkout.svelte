<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let cart = [];
  let checkoutComplete = false;

  function handleRemoveFromCart(index) {
    dispatch('removeFromCart', index);
  }

  function handleCheckout() {
    checkoutComplete = true;
    dispatch('clearCart');
  }

  $: total = cart.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2);

  function navigate(route) {
    dispatch('navigate', route);
  }
</script>

<div class="checkout">
  <div class="header">
    <button class="back" on:click={() => navigate('home')}>← Go Back</button>
    <h1>Checkout</h1>
  </div>

  {#if checkoutComplete}
    <div class="success-message">
      <h2>Order Successful!</h2>
      <p>Thank you for your purchase.</p>
      <button on:click={() => navigate('home')}>Return to Home</button>
    </div>
  {:else if cart.length === 0}
    <div class="empty-cart">
      <p>Your cart is empty</p>
      <button on:click={() => navigate('products')}>Browse Products</button>
    </div>
  {:else}
    <div class="cart-items">
      {#each cart as item, index}
        <div class="cart-item">
          <div class="item-details">
            <h3>{item.name || 'Unknown Product'}</h3>
            <p class="description">{item.description || ''}</p>
            <p class="price">${item.price?.toFixed(2) || '0.00'}</p>
          </div>
          <button class="remove" on:click={() => handleRemoveFromCart(index)}>Remove</button>
        </div>
      {/each}
    </div>

    <div class="checkout-summary">
      <div class="total">
        <h3>Total: ${total}</h3>
      </div>
      <button class="checkout-button" on:click={handleCheckout}>
        Complete Purchase
      </button>
    </div>
  {/if}
</div>

<style>
  .checkout {
    padding: 1rem;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .back {
    padding: 0.5rem 1rem;
    background-color: #666;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .cart-items {
    margin-bottom: 2rem;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
  }

  .item-details {
    flex: 1;
  }

  .description {
    color: #666;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  .price {
    font-weight: bold;
    color: #4CAF50;
  }

  .remove {
    padding: 0.5rem 1rem;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .checkout-summary {
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 8px;
  }

  .total {
    margin-bottom: 1rem;
  }

  .checkout-button {
    width: 100%;
    padding: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1rem;
  }

  .success-message {
    text-align: center;
    padding: 2rem;
  }

  .empty-cart {
    text-align: center;
    padding: 2rem;
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
    opacity: 0.9;
  }
</style>