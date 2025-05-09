<script>
  import Home from "./routes/Home.svelte";
  import Products from "./routes/Products.svelte";
  import Checkout from "./routes/Checkout.svelte";

  let currentRoute = 'home';
  let cart = [];

  function handleNavigate(event) {
    currentRoute = event.detail;
  }

  function addToCart(event) {
    const product = event.detail;
    cart = [...cart, product];
  }

  function removeFromCart(event) {
    const index = event.detail;
    cart = cart.filter((_, i) => i !== index);
  }

  function clearCart() {
    cart = [];
  }
</script>

{#if currentRoute === 'home'}
  <Home on:navigate={handleNavigate} />
{:else if currentRoute === 'products'}
  <Products {cart} on:addToCart={addToCart} on:navigate={handleNavigate} />
{:else if currentRoute === 'checkout'}
  <Checkout {cart} on:removeFromCart={removeFromCart} on:clearCart={clearCart} on:navigate={handleNavigate} />
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :global(#app) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>