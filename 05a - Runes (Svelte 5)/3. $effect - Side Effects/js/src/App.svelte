<script>
  // $effect runs side effects when dependencies change
  let count = $state(0);

  // Runs on mount and when count changes
  $effect(() => {
    console.log('Count is now:', count);

    // Return cleanup function (runs before next effect or on unmount)
    return () => {
      console.log('Cleanup for count:', count);
    };
  });
</script>

<button onclick={() => count++}>Clicked {count} times</button>
<p>Open console to see $effect in action</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
