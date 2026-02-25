<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->

<script>
  // $state for reactive state
  let count = $state(0);

  // $derived creates computed/derived values
  let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>Count: {count}</button>
<p>Doubled: {doubled}</p>
