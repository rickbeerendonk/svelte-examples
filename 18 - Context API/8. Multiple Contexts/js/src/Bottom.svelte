<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { getContext } from 'svelte';

  const { color } = getContext('color');
  const backgroundColor = getContext('background-color').color;
</script>

<h1 style:color style:background-color={backgroundColor}>Bottom</h1>