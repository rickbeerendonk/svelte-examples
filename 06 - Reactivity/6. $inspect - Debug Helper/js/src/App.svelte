<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  let count = $state(0);
  let name = $state('World');

  // console.log will only log the initial value,
  // $inspect will log initial value and updates
  $inspect(count, name);
</script>

<button onclick={() => count++}>Count: {count}</button>
<input bind:value={name} />
<p>Hello {name}!</p>
