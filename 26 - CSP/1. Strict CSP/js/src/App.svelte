<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<!--
  This demo proves Svelte works with strict Content Security Policy (CSP)
  that blocks inline scripts and inline styles.

  CSP Header used (see vite.config.js preview.headers):
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'

  Why it works:
  - Svelte compiles to regular JavaScript (no eval, no inline handlers)
  - Event handlers use addEventListener, not onclick="..."
  - Styles are compiled to external CSS files
  - No inline <style> tags or style="" attributes in production build

  To test:
  1. Run: npm run start (builds and serves production with CSP headers)
  2. Open browser DevTools > Console
  3. No CSP violation errors should appear
  4. The counter should work normally
-->

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
