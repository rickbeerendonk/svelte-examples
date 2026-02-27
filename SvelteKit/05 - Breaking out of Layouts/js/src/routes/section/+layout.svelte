<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk          -->

<script>
  let { children } = $props();
</script>

<div class="section-layout">
  <h2>Section Layout</h2>
  {@render children()}
</div>

<style>
  .section-layout {
    border: 5px solid blue;
    padding: 1rem;
  }
</style>
