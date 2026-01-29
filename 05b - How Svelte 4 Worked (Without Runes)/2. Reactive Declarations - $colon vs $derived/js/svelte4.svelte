<!--
  Svelte 4 syntax (for reference only - does not run in Svelte 5)
-->
<script>
  // Svelte 4: $: for reactive/derived values
  let count = 0;
  $: doubled = count * 2;
</script>

<button on:click={() => count++}>Count: {count}</button>
<p>Doubled: {doubled}</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
