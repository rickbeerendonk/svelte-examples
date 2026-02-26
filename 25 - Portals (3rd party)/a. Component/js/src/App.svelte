<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import Portal from 'svelte-portal';

  const name = 'Svelte';
</script>

<h1>Hello {name}!</h1>

<Portal target="#portal">
  <h1>Hello {name} in a Portal!</h1>
</Portal>