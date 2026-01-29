<!--
  Svelte 5 syntax (the modern approach)
-->
<script>
  // Svelte 5: $derived() for computed values
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>Count: {count}</button>
<p>Doubled: {doubled}</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
