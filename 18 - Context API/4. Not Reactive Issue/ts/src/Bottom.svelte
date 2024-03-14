<script lang="ts">
  import { getContext } from 'svelte';
  import colorContext from './color-context';

  let context = getContext(colorContext);
</script>

<h1 style={`color: ${context.color}`}>Bottom</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
