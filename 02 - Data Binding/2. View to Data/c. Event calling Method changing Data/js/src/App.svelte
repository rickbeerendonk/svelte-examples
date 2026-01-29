<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let count = $state(0);

  function handleClick() {
    count++;
  }
</script>

<button onclick={handleClick}>This has been clicked {count} times!</button>
