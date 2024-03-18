<script>
  import { tweened } from 'svelte/motion';

  let count = tweened(0);

  function handleClick() {
    // Read
    const currentCount = $count;

    // Write
    count.set(currentCount + 1);
  }
</script>

<!-- Use $... to get the value -->
<button on:click={handleClick}>This has been clicked {$count} times!</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
