<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk          -->

<script>
  let { children } = $props();
</script>

<div class="group1-layout">
  <h2>Group 1 Layout</h2>
  {@render children()}
</div>

<style>
  .group1-layout {
    border: 5px solid orange;
    padding: 1rem;
  }
</style>
