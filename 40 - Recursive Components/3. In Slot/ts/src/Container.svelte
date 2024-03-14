<script lang="ts">
  let recursive = false;
</script>

<h1 on:click={() => (recursive = true)}>Hello World!</h1>
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
