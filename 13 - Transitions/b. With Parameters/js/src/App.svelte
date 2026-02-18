<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { fade } from 'svelte/transition';

  let visible = $state(true);
</script>

<label> <input type="checkbox" bind:checked={visible} /> Visible </label>

{#if visible}
  <h1 transition:fade={{ duration: 3000 }}>Hello Svelte!</h1>
{/if}
