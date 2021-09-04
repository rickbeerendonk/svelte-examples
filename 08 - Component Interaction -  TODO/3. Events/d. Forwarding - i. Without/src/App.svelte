<script>
  import Top from './Top.svelte';

  let count = 0;

  function bottomChanged() {
    count++;
  }
</script>

<div>
  <Top on:updated={bottomChanged} />
  <h1>Clicked: {count}</h1>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk -->
