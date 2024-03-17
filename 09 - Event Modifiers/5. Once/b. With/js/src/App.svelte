<script>
  let count = 0; // Will NOT become more than 1
</script>

<button on:click|once={() => count++}
  >This has been clicked {count} times!</button
>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
