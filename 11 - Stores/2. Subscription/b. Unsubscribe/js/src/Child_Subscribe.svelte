<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { onDestroy } from 'svelte';
  import { name as storeName } from './stores.js';

  let name = $state('');

  const unsubscribeName = storeName.subscribe(value => (name = value));

  onDestroy(() => {
    // Prevent memory leak (when component is unloaded)
    unsubscribeName();
  });
</script>

<h1>Hello {name}!</h1>
