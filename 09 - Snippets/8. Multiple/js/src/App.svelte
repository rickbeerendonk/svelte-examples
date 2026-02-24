<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Container from './Container.svelte';
</script>

<Container>
  {#snippet first()}<span> <em>First</em> </span>{/snippet}

  {#snippet second()}<span> <b>Second</b> </span>{/snippet}

  <!-- Default children -->
  <u>Default</u>
</Container>
