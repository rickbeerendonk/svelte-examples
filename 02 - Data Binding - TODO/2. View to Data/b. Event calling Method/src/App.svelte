<script>
  function handleClick(e) {
    alert(`Event handled.
      Target: ${e.target}`);
  }
</script>

<h1 on:click={handleClick}>Hello World!</h1>
