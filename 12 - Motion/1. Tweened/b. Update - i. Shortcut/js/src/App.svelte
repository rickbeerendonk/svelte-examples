<script>
  import { tweened } from 'svelte/motion';

  let count = tweened(0);

  function handleClick() {
    // Update (Read + Write)
    // Shortcut for count.update(n => n + 1)
    $count++;
  }
</script>

<button on:click={handleClick}>This has been clicked {$count} times!</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
