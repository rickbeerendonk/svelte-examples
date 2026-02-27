<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { onMount } from 'svelte';

  let name = $state('World');
  let inputElement; // Will hold the DOM reference

  // onMount runs after the component is first rendered to the DOM
  onMount(() => {
    // Now inputElement is bound to the actual <input> DOM node
    inputElement.select(); // Select all text in the input
  });

  function handleChange(event) {
    name = event.target.value;
  }
</script>

<!-- bind:this binds the DOM element to the variable -->
<input bind:this={inputElement} value={name} oninput={handleChange} />
<p>Hello {name}!</p>
