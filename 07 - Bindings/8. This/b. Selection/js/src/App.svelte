<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { onMount } from 'svelte';

  let inputRef;
  let name = $state('Svelte');

  onMount(() => inputRef.select());
</script>

<input bind:this={inputRef} bind:value={name} />
<h1>Hello {name}!</h1>
