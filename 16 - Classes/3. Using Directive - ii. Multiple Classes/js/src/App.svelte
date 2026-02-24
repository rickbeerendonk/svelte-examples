<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let isDynamic1 = $state(false);
  let isDynamic2 = $state(false);

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

<h1
  class="static"
  class:dynamic1={isDynamic1}
  class:dynamic2={isDynamic2}
  onclick={updateDynamic}
  style="cursor: pointer;"
>
  Hello Svelte!
</h1>

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
