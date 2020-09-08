<script>
  import Container from './Container';

  let name1 = 'first';
  let name2 = 'second';

  function handleSwitch() {
    if (this.name1 === 'first') {
      this.name1 = 'second';
      this.name2 = 'first';
    } else {
      this.name1 = 'first';
      this.name2 = 'second';
    }
  }
</script>

<Container>
  <span slot={name1}> <em>First</em> </span>

  <span slot={name2}> <b>Second</b> </span>
</Container>

<button @click="handleSwitch">Switch</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
