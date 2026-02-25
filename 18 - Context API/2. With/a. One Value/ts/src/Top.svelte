<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import { setContext } from 'svelte';
  import Middle from './Middle.svelte';

  let { color } = $props();

  // Not reactive
  setContext<string>('color', color);
</script>

<Middle />
