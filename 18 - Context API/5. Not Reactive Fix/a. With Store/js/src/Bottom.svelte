<script>
  import { getContext } from 'svelte';

  let color = 'black';

  const colorCtx = getContext('color');
  colorCtx.color.subscribe(value => {
    color = value;
  });
</script>

<h1 style:color>Bottom</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
