<script>
  let count = 0;
  $: if (count > 0 && !(count % 2)) {
    // Alert every even number, except for 0
    alert(`Count became ${count}`);
  }

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>This has been clicked {count} times!</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
