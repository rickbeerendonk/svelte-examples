<script>
  import { getContext } from 'svelte';
  import colorContext from './color-context';

  let color = 'black';

  let { setChangeCallback } = getContext(colorContext);
  setChangeCallback((value) => (color = value));
</script>

<h1 style={`color: ${color}`}>Bottom</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
