<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  /* eslint-disable svelte/no-dom-manipulating */
  // DOM manipulation is intentional for educational purposes

  import { onMount } from 'svelte';

  let ref;

  onMount(() => {
    if (ref) {
      // Don't manipulate the DOM directly.
      // The Svelte runtime can get confused if there is a difference
      // between the actual DOM and the DOM expected by the Svelte runtime.
      ref.innerHTML = 'Hello <u>Svelte</u>!!!';
    }
  });
</script>

<h1 bind:this={ref}>Hello World!</h1>
