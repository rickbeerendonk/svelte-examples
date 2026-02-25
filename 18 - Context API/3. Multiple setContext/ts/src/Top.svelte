<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import { setContext } from 'svelte';
  import Bottom from './Bottom.svelte';
  import Middle from './Middle.svelte';

  setContext<{ color: string }>('color', { color: 'red' });
</script>

<Middle />
<Bottom />
