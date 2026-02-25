<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let { children, first, second } = $props();
</script>

<div class="container">
  The default item:
  <div class="content">
    {@render children?.()}
  </div>
  The 1st item:
  <div class="content">
    {@render first?.()}
  </div>
  The 2nd item:
  <div class="content">
    {@render second?.()}
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
