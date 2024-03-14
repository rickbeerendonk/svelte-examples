<script lang="ts">
  import { tweened } from 'svelte/motion';

  let count1 = tweened(0);
  let count2 = tweened(undefined); // Not animated on 1st change

  function handleClick1() {
    $count1++;
  }

  function handleClick2() {
    count2.update((_, value) => {
      // "value == undefined" short for "(value === undefined) || (value === null)"
      return value == undefined ? 0 : value + 1;
    });
  }
</script>

<h1 on:click={handleClick1}>This has been clicked {$count1} times!</h1>
<h1 on:click={handleClick2}>This has been clicked {$count2} times!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
