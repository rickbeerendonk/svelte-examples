<script lang="ts">
  import { onDestroy } from 'svelte';
  import { name } from './stores';
</script>

<!-- Use $<storename> to auto-(un)subscribe. -->
<h1>Hello {$name}!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
