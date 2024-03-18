<script>
  import Bottom from './Bottom.svelte';
  import { createEventDispatcher } from 'svelte';

  // Call createEventDispatcher() during Component Initialisation
  const dispatch = createEventDispatcher();

  function bottomChanged() {
    dispatch('updated');
  }
</script>

<Bottom on:updated={bottomChanged} />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2021 Rick Beerendonk -->
