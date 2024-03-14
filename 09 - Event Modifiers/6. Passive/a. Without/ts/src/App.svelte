<script lang="ts">
  function sleep(delay) {
    // Very naive
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {}
  }

  function handleClick(event) {
    // Without passive, the browser will wait for the handler to finish.
    // If the handler will call event.preventDefault(), it is respected.
    sleep(1000);
    //event.preventDefault();
  }
</script>

<a href="https://www.svelte.dev" on:click={handleClick}>Svelte Website</a>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
