<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { getAllContexts } from 'svelte';

  // Must be called during component initialization
  let ctxMaps = getAllContexts();
</script>

<h1>Contexts</h1>
<ul>
  {#each ctxMaps.keys() as key (key)}
    <li>{key}: {ctxMaps.get(key)}</li>
  {/each}
</ul>
