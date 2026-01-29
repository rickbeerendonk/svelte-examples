<script>
  import Child from './Child.svelte';

  // Svelte 5: Use $state for reactive state
  let count = $state(0);

  function childChanged() {
    count++;
  }
</script>

<div>
  <!-- Svelte 5: Pass callback as prop instead of using on:event -->
  <Child onupdated={childChanged} />
  <h1>Clicked: {count}</h1>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
