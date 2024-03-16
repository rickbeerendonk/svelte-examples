<script lang="ts">
  import Child from './Child.svelte';
  import { name as storeName } from './stores';

  let name: string = '';

  storeName.subscribe(value => (name = value));
</script>

<Child />
<h1>Hello {name}!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
