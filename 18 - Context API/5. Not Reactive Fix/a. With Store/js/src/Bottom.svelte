<script>
  import { getContext } from 'svelte';

  let color = 'black';

  const colorWritable = getContext('color');
  colorWritable.subscribe(value => {
    color = value;
  });
  // FIX: Add unsubscribe!
</script>

<h1 style:color>Bottom</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
