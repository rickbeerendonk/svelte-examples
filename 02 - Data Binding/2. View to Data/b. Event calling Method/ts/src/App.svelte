<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  function handleClick(e: MouseEvent) {
    alert(`Event handled.
      Target: ${e.target}`);
  }
</script>

<button onclick={handleClick}>Hello World!</button>
