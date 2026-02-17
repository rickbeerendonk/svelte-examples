<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Child from './Child.svelte';

  let name = $state('World');

  function nameChanged(newName) {
    name = newName;
  }
</script>

<div>
  <Child {name} onchange={nameChanged} />
  <h1>Hello {name}</h1>
</div>
