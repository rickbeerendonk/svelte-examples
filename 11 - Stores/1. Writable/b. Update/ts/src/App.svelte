<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import Child from './Child.svelte';
  import { count as storeCount } from './stores.js';

  let count = $state(0);

  storeCount.subscribe(value => (count = value));
</script>

<Child />
<h1>Clicked: {count}</h1>
