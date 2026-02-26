<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  // $bindable() makes a prop two-way bindable
  let { count = $bindable(0) } = $props();
</script>

<button onclick={() => count++}>Count: {count}</button>
