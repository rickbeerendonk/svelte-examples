<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import Child from './Child.svelte';

  let count = $state(0);

  function childUpdated() {
    count++;
  }
</script>

<div>
  <Child onupdated={childUpdated} />
  <h1>Clicked: {count}</h1>
</div>
