<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let isDynamic = false;
</script>

<button
  class={`static ${isDynamic ? 'dynamic' : ''}`}
  on:click={() => (isDynamic = !isDynamic)}
>
  Hello Svelte!
</button>

<style>
  .static {
    color: red;
  }

  .dynamic {
    text-decoration: underline;
  }
</style>
