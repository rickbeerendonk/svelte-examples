<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Hello from './components/Hello.svelte';

  let showComponent = $state(true);
  let name = $state('A');

  // Update name after 400ms, then hide component after 500ms
  setTimeout(() => (name = 'B'), 400);
  setTimeout(() => (showComponent = false), 500);
</script>

<div id="app">
  {#if showComponent}
    <Hello {name} />
  {/if}
</div>