<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { portal } from 'svelte-portal';

  const name = 'Svelte';
</script>

<h1>Hello {name}!</h1>

<h1 use:portal={'#portal'}>Hello {name} in a Portal!</h1>