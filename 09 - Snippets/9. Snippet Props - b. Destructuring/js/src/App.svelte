<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Container from './Container.svelte';
</script>

<!-- Destructure data -->
<Container>
  {#snippet children({ source })}
    <em>First: {source}</em>
  {/snippet}
</Container>
