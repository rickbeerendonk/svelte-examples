<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let { children } = $props();
</script>

<div class="container">
  The only item:
  <div class="content">
    <!-- Alternative content if there is no children snippet -->
    {#if children}
      {@render children()}
    {:else}
      Default Value
    {/if}
  </div>
</div>

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
