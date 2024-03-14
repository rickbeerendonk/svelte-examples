<script>
  import Container from './Container.svelte';

  let recursive = false;
</script>

<Container>
  <em>Slot:</em>
  <svelte:self />
</Container>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
