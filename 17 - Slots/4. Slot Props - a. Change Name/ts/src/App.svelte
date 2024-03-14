<script lang="ts">
  import Container from './Container.svelte';

  let source = 'App';
</script>

<Container let:source={containerSource}>
  <em>First: {containerSource}</em>
</Container>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
