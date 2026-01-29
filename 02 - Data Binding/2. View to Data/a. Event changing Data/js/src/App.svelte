<script>
  // Svelte 5: Use $state() for reactive state
  let count = $state(0);
</script>

<!-- Some frameworks have performance problems with inline handlers, NOT Svelte -->
<!-- Svelte 5: Use onclick instead of on:click -->
<button onclick={() => count++}>This has been clicked {count} times!</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
