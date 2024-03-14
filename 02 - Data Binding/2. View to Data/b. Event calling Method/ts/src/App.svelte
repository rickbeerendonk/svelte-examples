<script lang="ts">
  function handleClick(e) {
    alert(`Event handled.
      Target: ${e.target}`);
  }
</script>

<h1 on:click={handleClick}>Hello World!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
