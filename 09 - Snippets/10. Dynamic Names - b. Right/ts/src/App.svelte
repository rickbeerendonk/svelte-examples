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

<Container>
  {#snippet first()}
    <span>
      {#if name1 === 'first'}<em>First</em>{:else}<b>Second</b>{/if}
    </span>
  {/snippet}

  {#snippet second()}
    <span>
      {#if name2 === 'second'}<b>Second</b>{:else}<em>First</em>{/if}
    </span>
  {/snippet}
</Container>

<button onclick={handleSwitch}>Switch</button>
