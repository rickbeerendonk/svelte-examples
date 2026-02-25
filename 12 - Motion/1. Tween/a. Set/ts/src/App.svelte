<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import { Tween } from 'svelte/motion';

  const count = new Tween(0);

  function handleClick() {
    // Read
    const currentCount = count.current;

    // Write
    count.set(currentCount + 1);
  }
</script>

<!-- Use .current to get the value -->
<button onclick={handleClick}
  >This has been clicked {count.current} times!</button
>
