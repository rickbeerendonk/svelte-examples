<script>
  let recursive = false;
</script>

<h1 on:click={() => (recursive = true)}>Hello World!</h1>
{#if recursive}
  <svelte:self />
{/if}

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
