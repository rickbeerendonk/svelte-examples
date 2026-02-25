<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->

<script>
  let count = $state(0);

  $effect(() => {
    const message = `Count became ${count}`;
    console.log(message);
    alert(message);
  });

  function handleClick() {
    count += 1;
  }
</script>

<button onclick={handleClick}>This has been clicked {count} times!</button>
