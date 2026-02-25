<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->

<script>
  // $state creates reactive state
  let count = $state(0);

  function handleClick() {
    count += 1;
  }
</script>

<button onclick={handleClick}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
