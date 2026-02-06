<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { createEventDispatcher } from 'svelte';

  let name = '';
  const dispatch = createEventDispatcher();

  function handleSubmit() {
    dispatch('added', name); // Emit the custom event 'add' with the name as detail
    name = ''; // Clear the input field
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input bind:value={name} />
  <button type="submit">Add</button>
</form>
