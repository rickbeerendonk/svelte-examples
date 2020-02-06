<script>
  let dynamic = false;
</script>

<style>
  .static {
    color: red;
  }

  .dynamic {
    text-decoration: underline;
  }
</style>

<h1 class="static" class:dynamic on:click={() => (dynamic = !dynamic)}>
  Hello Svelte!
</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
