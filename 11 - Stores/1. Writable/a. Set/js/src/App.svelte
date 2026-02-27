<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Child from './Child.svelte';
  import { name } from './stores.js';

  let localName = $state();

  name.subscribe(value => (localName = value));
</script>

<Child />
<h1>Parent: Hello {localName}!</h1>
