<script>
  const items = new Set(['A', 'B', 'C']);
</script>

<ul>
  <!-- first convert into array -->
  {#each [...items] as item}
    <li>{item}</li>
  {/each}
</ul>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
