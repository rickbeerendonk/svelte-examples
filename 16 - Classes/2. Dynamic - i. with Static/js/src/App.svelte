<script>
  let isDynamic = false;
</script>

<h1
  class={`static ${isDynamic ? 'dynamic' : ''}`}
  on:click={() => (isDynamic = !isDynamic)}
>
  Hello Svelte!
</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .static {
    color: red;
  }

  .dynamic {
    text-decoration: underline;
  }
</style>
