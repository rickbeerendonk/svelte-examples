<script>
  const items = new Set(['A', 'B', 'C']);
</script>

<ol>
  <!-- first convert into array -->
  {#each [...items] as item, index}
    <li value={index}>{item}</li>
  {/each}
</ol>
