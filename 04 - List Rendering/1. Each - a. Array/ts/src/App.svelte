<script lang="ts">
  const items = ['one', 'two', 'three'];
</script>

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>

<!--
  Block:
  # = Open
  / = Close
-->

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
