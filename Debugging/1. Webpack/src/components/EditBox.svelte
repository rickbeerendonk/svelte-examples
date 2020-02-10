<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let value;

  function changed(e) {
    dispatch('change', e.target.value);
  }
</script>

<!-- warn-disable a11y-autofocus -->
<input autofocus {value} on:keyup={changed} />
