<script>
  let isDynamic1 = false;
  let isDynamic2 = false;

  function updateDynamic() {
    if (isDynamic1) {
      if (isDynamic2) {
        isDynamic1 = false;
        isDynamic2 = false;
      } else {
        isDynamic2 = true;
      }
    } else {
      isDynamic1 = true;
    }
  }
</script>

<style>
  .static {
    color: red;
  }

  .dynamic1 {
    text-decoration: underline;
  }

  .dynamic2 {
    font-variant: small-caps;
  }
</style>

<h1
  class="static"
  class:dynamic1={isDynamic1}
  class:dynamic2={isDynamic2}
  on:click={updateDynamic}>
  Hello Svelte!
</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
