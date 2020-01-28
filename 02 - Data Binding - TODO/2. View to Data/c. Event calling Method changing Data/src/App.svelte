<script>
  let count = 0;

  function handleClick() {
    count++;
  }
</script>

<h1 on:click={handleClick}>This has been clicked {count} times!</h1>
