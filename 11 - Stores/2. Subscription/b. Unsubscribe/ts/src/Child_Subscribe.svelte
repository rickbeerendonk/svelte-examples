<script lang="ts">
  import { onDestroy } from 'svelte';
  import { name as storeName } from './stores';

  let name = 0;

  const unsubscribeName = storeName.subscribe(value => (name = value));

  onDestroy(() => {
    // Prevent memory leak (when component is unloaded)
    unsubscribeName();
  });
</script>

<h1>Hello {name}!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
