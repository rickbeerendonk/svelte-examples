<script>
  import Child from './Child.svelte';
  import { count as storeCount } from './stores';

  let count = 0;

  storeCount.subscribe(value => (count = value));
</script>

<div>
  <Child />
  <h1>Clicked: {count}</h1>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
