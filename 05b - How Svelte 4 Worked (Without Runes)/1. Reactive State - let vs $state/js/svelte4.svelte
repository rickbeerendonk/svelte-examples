<!--
  Svelte 4 syntax (for reference only - does not run in Svelte 5)
-->
<script>
  // Svelte 4: 'let' variables are automatically reactive
  let count = 0;
</script>

<button on:click={() => count++}>
  Clicked {count} times
</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
