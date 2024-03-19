<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { onMount } from 'svelte';

  let name = 'World';
  let inputElement;

  onMount(() => {
    inputElement.select();
  });

  function handleChange(event) {
    name = event.target.value;
  }
</script>

<input bind:this={inputElement} value={name} on:input={handleChange} />
<p>Hello {name}!</p>
