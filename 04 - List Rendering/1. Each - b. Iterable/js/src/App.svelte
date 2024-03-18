<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  const items = new Set(['A', 'B', 'C']);
</script>

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
