<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script lang="ts">
  /* eslint-disable svelte/no-at-debug-tags */

  let count = $state(0);
  let obj = $state({ count: 0 });
  let arr = $state([0]);
</script>

<!-- @debug is in a template what console.log() + debugger is in JavaScript -->
{@debug count}
{@debug obj}
{@debug arr}

<button onclick={() => count++}>
  Value: This has been clicked {count} times!
</button>

<button onclick={() => obj.count++}>
  Object: This has been clicked {obj.count} times!
</button>

<button onclick={() => arr[0]++}>
  Array: This has been clicked {arr[0]} times!
</button>
