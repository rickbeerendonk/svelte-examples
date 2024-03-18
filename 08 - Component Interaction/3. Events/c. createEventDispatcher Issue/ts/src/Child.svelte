<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  function buttonClicked() {
    // Wrong: createEventDispatcher should have been called during Component Initialisation
    const dispatch = createEventDispatcher();

    dispatch('updated');
  }
</script>

<button on:click={buttonClicked}>Click</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
