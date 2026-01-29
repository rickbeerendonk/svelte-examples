<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<!-- eslint-disable svelte/require-each-key -->
<!-- No key needed for this basic index educational example -->

<script>
  const items = new Set(['A', 'B', 'C']);
</script>

<ol>
  <!-- eslint-disable-next-line svelte/require-each-key -->
  {#each items as item, index}
    <li value={index}>{item}</li>
  {/each}
</ol>