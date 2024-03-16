<script>
  import { getContext } from 'svelte';
  import Bottom from './Bottom.svelte';

  let { handleSwitch } = getContext('color');
</script>

<Bottom />
<button on:click={handleSwitch}>Switch color</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
