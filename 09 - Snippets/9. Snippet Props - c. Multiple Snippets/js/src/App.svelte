<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Container from './Container.svelte';

  const source = 'App';
</script>

<Container>
  {#snippet first()}<span> <em>First: {source}</em> </span>{/snippet}

  <!-- Declare a parameter to use snippet prop "source" -->
  {#snippet second(source)}<span> <b>Second: {source}</b> </span>{/snippet}
</Container>
