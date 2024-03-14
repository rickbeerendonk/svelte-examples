<script lang="ts">
  export let value = 'Svelte';

  function changed(e) {
    value = e.target.value;
  }
</script>

<input {value} on:keyup={changed} />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
