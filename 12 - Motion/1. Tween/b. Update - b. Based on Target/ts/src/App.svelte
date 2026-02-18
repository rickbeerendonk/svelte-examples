<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import { Tween } from 'svelte/motion';

  let count = new Tween(0);

  function handleClick() {
    // Reads .target: the final destination value, not the animated value.
    // Rapid clicks during animation always increment the true count,
    // so no increments are "lost" (target++ equals target = target + 1).
    count.target++;
  }
</script>

<button onclick={handleClick}
  >This has been clicked {count.current} times!</button
>
