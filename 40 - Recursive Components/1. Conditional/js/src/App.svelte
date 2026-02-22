<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import App from './App.svelte';

  let recursive = $state(false);
</script>

<button onclick={() => (recursive = true)} disabled={recursive}>
  Hello World!
</button>
{#if recursive}
  <App />
{/if}
