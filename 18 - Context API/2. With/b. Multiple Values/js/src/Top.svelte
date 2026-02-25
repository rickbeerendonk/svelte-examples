<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { setContext } from 'svelte';
  import Middle from './Middle.svelte';

  let { color } = $props();

  // Not reactive
  setContext('style', { color, backgroundColor: 'lightgray' });
</script>

<Middle />
