<script lang="ts">
  const items = new Set(['A', 'B', 'C']);
</script>

<ol>
  <!-- first convert into array -->
  {#each [...items] as item, index}
    <li value={index}>{item}</li>
  {/each}
</ol>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
