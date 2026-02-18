<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { Tween } from 'svelte/motion';

  let count = new Tween(0);

  function handleClick() {
    // Reads .current: the animated value that may be mid-tween (e.g. 3.7).
    // Rapid clicks during animation add 1 to the in-progress value,
    // so some increments can effectively be "lost".
    count.target = count.current + 1;
  }
</script>

<!-- Use .current to get the value -->
<button onclick={handleClick}
  >This has been clicked {count.current} times!</button
>
