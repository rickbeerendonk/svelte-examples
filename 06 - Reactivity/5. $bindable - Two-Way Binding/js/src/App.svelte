<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  import Counter from './Counter.svelte';

  let count = $state(0);
</script>

<Counter bind:count />
<p>Parent sees count: <input type="number" bind:value={count} /></p>
