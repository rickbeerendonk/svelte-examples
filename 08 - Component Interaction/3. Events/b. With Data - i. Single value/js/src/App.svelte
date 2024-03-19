<script>
  import Child from './Child.svelte';

  let name = 'World';

  function nameChanged(e) {
    name = e.detail;
  }
</script>

<div>
  <Child {name} on:change={nameChanged} />
  <h1>Hello {name}</h1>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
