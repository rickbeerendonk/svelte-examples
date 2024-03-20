<script lang="ts">
  import { get } from 'svelte/store';
  import { name } from './stores.js';
</script>

<h1>Hello {get(name)}!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
