<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk          -->

<script>
  let { children } = $props();
</script>

<div class="root-layout">
  <h1>Root Layout</h1>
  {@render children()}
</div>

<style>
  .root-layout {
    border: 5px solid red;
    padding: 1rem;
  }
</style>
