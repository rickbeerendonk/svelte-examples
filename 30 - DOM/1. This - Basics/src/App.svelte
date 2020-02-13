<script>
  import { onMount } from 'svelte';

  let ref;

  onMount(() => {
    ref.innerHTML = 'Hello <u>Svelte</u>!!!';
  });
</script>

<h1 bind:this={ref}>Hello World!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
