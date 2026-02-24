<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import Container from './Container.svelte';

  const source = 'App';
</script>

<Container>
  {#snippet children(containerSource: string)}
    <em>First: {containerSource}</em>
  {/snippet}
</Container>
