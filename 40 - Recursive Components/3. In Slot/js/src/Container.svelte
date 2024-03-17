<script>
  let recursive = false;
</script>

<button on:click={() => (recursive = true)} disabled={recursive}>
  Hello World!
</button>
{#if recursive}
  <div class="container">
    The only item:
    <div class="content">
      <slot />
    </div>
  </div>
{/if}

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .container {
    background-color: lightgray;
    padding: 10px;
  }

  .content {
    background-color: white;
    padding: 10px;
  }
</style>
