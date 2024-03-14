<script lang="ts">
  import Hello from './components/Hello.svelte';

  let showComponent = true;
  let name = 'A';

  setInterval(() => (name = 'B'), 400);
  setInterval(() => (showComponent = false), 500);
</script>

<div id="app">
  {#if showComponent}
    <Hello props={{ name }} />
  {/if}
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
