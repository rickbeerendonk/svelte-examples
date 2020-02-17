<script>
  import { onMount } from 'svelte';

  let myH1;

  onMount(() => (myH1.innerHTML = 'Hello <u>Svelte</u>!!!'));
</script>

<h1 bind:this={myH1}>Hello World!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
