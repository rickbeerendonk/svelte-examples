<script>
  import { setContext } from 'svelte';
  import Middle from './Middle.svelte';

  export let color;

  // Not reactive
  setContext('style', { color, backgroundColor: 'lightgray' });
</script>

<Middle />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->
