<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  // Svelte 5: Use $state for reactive state
  let count = $state(0);

  // Svelte 5: Use $derived for computed values
  let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>Count: {count}</button>
<p>Doubled: {doubled}</p>
