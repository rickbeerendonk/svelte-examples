<script>
  import { setContext } from 'svelte';
  import Middle from './Middle.svelte';

  export let color;

  // Not reactive
  setContext('color', color);
</script>

<Middle />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
