<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import { name } from './stores.js';
</script>

<input bind:value={$name} />
<h1>Hello {$name}!</h1>