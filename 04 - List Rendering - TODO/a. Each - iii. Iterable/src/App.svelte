<script>
  function* items() {
    for (let i = 0; i < 5; i++) {
      yield i;
    }
  }
</script>

<ul>
  <!-- first convert into array -->
  {#each [...items()] as item}
    <li>{item}</li>
  {/each}
</ul>
