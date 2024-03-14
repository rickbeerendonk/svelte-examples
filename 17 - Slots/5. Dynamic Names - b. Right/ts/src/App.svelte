<script>
  import Container from './Container';

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
  <span slot="first">
    {#if name1 === 'first'}<em>First</em>{:else}<b>Second</b>{/if}
  </span>

  <span slot="second">
    {#if name2 === 'second'}<b>Second</b>{:else}<em>First</em>{/if}
  </span>
</Container>

<button on:click={handleSwitch}>Switch</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
