<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Child from './Child.svelte';

  let name = $state();
</script>

<div>
  <!-- Use sparingly. Flow of data can become unclear. -->
  <Child bind:value={name} />
  <h1>Hello {name}!</h1>
</div>
