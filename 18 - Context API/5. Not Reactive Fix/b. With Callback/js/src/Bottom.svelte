<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { getContext } from 'svelte';

  let color = $state('black');

  const { setChangeCallback } = getContext('color');
  setChangeCallback(value => (color = value));
</script>

<h1 style:color>Bottom</h1>
