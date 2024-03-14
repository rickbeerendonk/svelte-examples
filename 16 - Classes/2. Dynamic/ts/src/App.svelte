<script lang="ts">
  let isDynamic = false;
</script>

<h1
  class={isDynamic ? 'dynamic' : ''}
  on:click={() => (isDynamic = !isDynamic)}
>
  Hello Svelte!
</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .dynamic {
    text-decoration: underline;
  }
</style>
