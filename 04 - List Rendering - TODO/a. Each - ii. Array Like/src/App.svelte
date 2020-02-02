<script>
  // Array like = Has length property.
  let items = 'items';
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
