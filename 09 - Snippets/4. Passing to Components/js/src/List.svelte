<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  let { items, row } = $props();
</script>

<ul>
  {#each items as item (item)}
    {@render row(item)}
  {/each}
</ul>
