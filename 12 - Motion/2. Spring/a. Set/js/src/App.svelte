<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { Spring } from 'svelte/motion';

  const count = new Spring(0);

  function handleClick() {
    // Read
    const currentCount = count.target;

    // Write (set target, spring animates current towards it)
    count.target = currentCount + 1;
  }
</script>

<!-- Use .current to get the value -->
<button onclick={handleClick}>
  This has been clicked {count.current} times!
</button>
