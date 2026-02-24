<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let dynamic = $state(false);
</script>

<h1
  class="static"
  class:dynamic
  onclick={() => (dynamic = !dynamic)}
  style="cursor: pointer"
>
  Hello Svelte!
</h1>

<style>
  .static {
    color: red;
  }

  .dynamic {
    text-decoration: underline;
  }
</style>
