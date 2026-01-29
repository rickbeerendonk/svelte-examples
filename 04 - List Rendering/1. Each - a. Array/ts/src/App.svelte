<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  // Unique items used as keys for educational purposes
  const items = ['one', 'two', 'three'];
</script>

<ul>
  {#each items as item (item)}
    <li>{item}</li>
  {/each}
</ul>

<!--
  Block:
  # = Open
  / = Close
-->
