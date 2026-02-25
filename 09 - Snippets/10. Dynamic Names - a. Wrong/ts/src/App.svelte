<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import Container from './Container.svelte';

  let name1 = $state('first');
  let name2 = $state('second');

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

<!-- Wrong: Dynamic snippet names cannot be used as prop names -->
<Container>
  {#snippet first()}<span> <em>First</em> </span>{/snippet}

  {#snippet second()}<span> <b>Second</b> </span>{/snippet}
</Container>

<button onclick={handleSwitch}>Switch</button>
