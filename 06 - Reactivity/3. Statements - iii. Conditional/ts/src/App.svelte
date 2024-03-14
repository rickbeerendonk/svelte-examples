<script lang="ts">
  let count = 0;
  $: if (count > 0 && !(count % 2)) {
    // Alert every even number, except for 0
    alert(`Count became ${count}`);
  }

  function handleClick() {
    count += 1;
  }
</script>

<h1 on:click={handleClick}>This has been clicked {count} times!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
