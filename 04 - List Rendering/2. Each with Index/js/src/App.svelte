<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  const items = new Set(['A', 'B', 'C']);
</script>

<ol>
  {#each items as item, index}
    <li value={index}>{item}</li>
  {/each}
</ol>
