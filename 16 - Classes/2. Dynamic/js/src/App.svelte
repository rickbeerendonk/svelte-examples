<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let isDynamic = $state(false);
</script>

<button
  class={isDynamic ? 'dynamic' : ''}
  onclick={() => (isDynamic = !isDynamic)}
>
  Hello Svelte!
</button>

<style>
  .dynamic {
    text-decoration: underline;
  }
</style>
