<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import Container from './Container.svelte';
</script>

<!-- Destructure data -->
<Container>
  {#snippet children({ source }: { source: string })}
    <em>First: {source}</em>
  {/snippet}
</Container>
