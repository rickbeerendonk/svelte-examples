<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import ClickMe from './ClickMe.svelte';

  let id = 0;

  function handleClick() {
    id += 1;
  }
</script>

<button on:click={handleClick}>Change ID</button>
<br />
{#key id}
  <ClickMe />
{/key}
