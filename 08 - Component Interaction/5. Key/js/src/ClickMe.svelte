<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  let count = $state(0);

  function handleClick() {
    count += 1;
  }
</script>

<button onclick={handleClick}>
  This button has been clicked {count} times
</button>
