<script>
  import Container from './Container.svelte';

  let name1 = 'first';
  let name2 = 'second';

  function handleSwitch() {
    if (name1 === 'first') {
      name1 = 'second';
      name2 = 'first';
    } else {
      name1 = 'first';
      name2 = 'second';
    }
  }
</script>

<Container>
  <span slot={name1}> <em>First</em> </span>

  <span slot={name2}> <b>Second</b> </span>
</Container>

<button on:click={handleSwitch}>Switch</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
