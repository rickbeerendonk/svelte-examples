<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let name = 'Svelte';

  function changed(e) {
    dispatch('change', {
      name: e.target.value
    });
  }
</script>

<input value={name} on:keyup={changed} />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
