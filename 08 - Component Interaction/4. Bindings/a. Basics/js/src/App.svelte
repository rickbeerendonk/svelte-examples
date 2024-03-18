<script>
  import Child from './Child.svelte';

  let name;
</script>

<div>
  <!-- Use sparingly. Flow of data can become unclear. -->
  <Child bind:value={name} />
  <h1>Hello {name}!</h1>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
