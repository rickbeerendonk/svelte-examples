<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { Tween } from 'svelte/motion';

  let count1 = new Tween(0);
  let count2 = new Tween(undefined); // Not animated on 1st change

  function handleClick1() {
    count1.target++;
  }

  function handleClick2() {
    const value = count2.current;
    // "value == undefined" short for "(value === undefined) || (value === null)"
    if (value == undefined) {
      count2.set(0, { duration: 0 });
    } else {
      count2.target = value + 1;
    }
  }
</script>

<button onclick={handleClick1}
  >This has been clicked {count1.current} times!</button
>
<button onclick={handleClick2}
  >This has been clicked {count2.current} times!</button
>
