<script>
  import { onMount } from 'svelte';

  let name = 'World';
  let ref;

  onMount(() => {
    ref.focus();
  });
</script>

<input bind:value={name} bind:this={ref} />
<h1>Hello {name}!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
