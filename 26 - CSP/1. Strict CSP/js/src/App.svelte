<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  let count = $state(0);
  let cspStatus = $state('Checking...');

  // If this code runs, JavaScript from external files works (CSP allows 'self')
  $effect(() => {
    cspStatus = 'Active and Svelte Works!';
  });

  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }
</script>

<h1>Count = {count}</h1>

<button onclick={increment}>+1</button>
<button onclick={decrement}>-1</button>

<p>CSP: {cspStatus}</p>

<style>
</style>
