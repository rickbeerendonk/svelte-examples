<script lang="ts">
  import { name as storeName } from './stores.js';

  let name = 0;

  storeName.subscribe(value => (name = value));
</script>

<h1>Hello {name}!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
