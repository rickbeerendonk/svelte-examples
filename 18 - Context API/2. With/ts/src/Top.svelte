<script>
  import { setContext } from 'svelte';
  import colorContext from './color-context';
  import Middle from './Middle';

  export let color;

  setContext(colorContext, { color });
</script>

<Middle />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
