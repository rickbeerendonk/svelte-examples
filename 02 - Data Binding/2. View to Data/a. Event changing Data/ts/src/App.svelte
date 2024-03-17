<script lang="ts">
  let count = 0;
</script>

<!-- Some frameworks have performance problems with inline handlers, NOT Svelte -->
<button on:click={() => count++}>This has been clicked {count} times!</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
