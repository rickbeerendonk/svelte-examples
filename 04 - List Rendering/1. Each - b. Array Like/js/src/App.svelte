<script>
  // Array = Has length property
  // Array like = Has no length property (iterable)

  //const items = 'items';
  const items = new Set([1, 2, 3]);
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
