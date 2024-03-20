<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  import { multiply } from '$lib/math.js';

  let valuesString = '';
  $: result = multiply(...valuesString.trim().split(' '));
</script>

<svelte:head>
  <title>Multiply</title>
</svelte:head>

<h2>Multiply</h2>

<label>
  Values: <input bind:value={valuesString} />
</label>

<p>
  Result: {result}
</p>
