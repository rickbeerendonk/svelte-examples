<script lang="ts">
  import { onMount } from 'svelte';

  let h1Ref;

  // eslint-disable-next-line svelte/no-dom-manipulating
  onMount(() => (h1Ref.innerHTML = 'Hello <u>Svelte</u>!!!'));
</script>

<h1 bind:this={h1Ref}>Hello World!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
