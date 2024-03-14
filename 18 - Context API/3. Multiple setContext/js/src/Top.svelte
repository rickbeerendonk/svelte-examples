<script>
  import { setContext } from 'svelte';
  import colorContext from './color-context';
  import Middle from './Middle.svelte';

  setContext(colorContext, { color: 'red' });
</script>

<Middle />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
