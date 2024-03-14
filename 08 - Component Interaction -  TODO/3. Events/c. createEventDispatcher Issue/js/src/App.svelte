<script>
  import Child from './Child.svelte';

  let count = 0;

  function childChanged() {
    count++;
  }
</script>

<div>
  <Child on:updated={childChanged} />
  <h1>Clicked: {count}</h1>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
