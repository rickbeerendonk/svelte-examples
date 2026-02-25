<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { onMount } from 'svelte';

  let name = $state('World');
  let inputElement;

  onMount(() => {
    inputElement.select();
  });

  function handleChange(event) {
    name = event.target.value;
  }
</script>

<input bind:this={inputElement} value={name} oninput={handleChange} />
<p>Hello {name}!</p>
