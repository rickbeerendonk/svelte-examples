<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  import { sum } from '$lib/math.js';

  let valuesString = '';
  $: result = sum(...valuesString.trim().split(' ').map(Number));
</script>

<svelte:head>
  <title>Sum</title>
</svelte:head>

<h2>Sum</h2>

<label>
  Values: <input bind:value={valuesString} />
</label>

<p>
  Result: {result}
</p>
