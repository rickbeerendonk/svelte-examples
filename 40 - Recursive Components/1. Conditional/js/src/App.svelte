<script>
  let recursive = false;
</script>

<button on:click={() => (recursive = true)} disabled={recursive}>
  Hello World!
</button>
{#if recursive}
  <svelte:self />
{/if}

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
