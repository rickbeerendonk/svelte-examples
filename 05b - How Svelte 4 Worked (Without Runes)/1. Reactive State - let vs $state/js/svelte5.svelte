<!--
  Svelte 5 syntax (the modern approach)
-->
<script>
  // Svelte 5: Use $state() for reactive state
  let count = $state(0);
</script>

<button onclick={() => count++}>
  Clicked {count} times
</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
