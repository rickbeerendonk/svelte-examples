<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script lang="ts">
  import { setContext } from 'svelte';
  import Middle from './Middle.svelte';

  let { color } = $props();

  // Not reactive
  setContext<{ color: string; backgroundColor: string }>('style', {
    color,
    backgroundColor: 'lightgray'
  });
</script>

<Middle />
