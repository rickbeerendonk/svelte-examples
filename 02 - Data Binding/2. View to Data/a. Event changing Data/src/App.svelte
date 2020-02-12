<script>
  let count = 0;
</script>

<!-- Some frameworks have performance problems with inline handlers, NOT Svelte -->
<h1 on:click={() => count++}>This has been clicked {count} times!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
