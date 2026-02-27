<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk          -->

<script>
  let { children } = $props();
</script>

<div class="group2-layout">
  <h2>Group 2 Layout</h2>
  {@render children()}
</div>

<style>
  .group2-layout {
    border: 5px solid purple;
    padding: 1rem;
  }
</style>
