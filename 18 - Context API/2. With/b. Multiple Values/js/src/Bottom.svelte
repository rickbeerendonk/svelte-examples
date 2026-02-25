<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { getContext } from 'svelte';

  const { backgroundColor, color } = getContext('style');
</script>

<h1 style:background-color={backgroundColor} style:color>Bottom</h1>