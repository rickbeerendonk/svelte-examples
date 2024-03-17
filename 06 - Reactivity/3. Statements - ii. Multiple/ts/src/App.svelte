<script lang="ts">
  let count = 0;
  $: {
    const message = `Count became ${count}`;
    console.log(message);
    alert(message);
  }

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>This has been clicked {count} times!</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
