<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  // Call createEventDispatcher() during Component Initialisation
  const dispatch = createEventDispatcher();

  function buttonClicked() {
    dispatch('updated');
  }
</script>

<button on:click={buttonClicked}>Click</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk -->
