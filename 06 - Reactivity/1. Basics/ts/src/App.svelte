<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<h1 on:click={handleClick}>This has been clicked {count} times!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
