<script>
  import { setContext } from 'svelte';
  import colorContext from './color-context';
  import Bottom from './Bottom';

  setContext(colorContext, { color: 'green' });
</script>

<Bottom />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
