<svelte:options immutable={true} />

<script>
  export let name;
</script>

{#if name}
  <h1>Hello {name}!</h1>
{/if}

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  h1 {
    color: #d676ff;
  }
</style>
