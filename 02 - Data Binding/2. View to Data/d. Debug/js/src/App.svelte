<script>
  /* eslint-disable svelte/no-at-debug-tags */

  let count = 0;
</script>

<!-- @debug is in a template what console.log() + debugger is in JavaScript -->
<!-- Will not work with properties of objects or array entries -->
{@debug count}

<button on:click={() => count++}>This has been clicked {count} times!</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->
