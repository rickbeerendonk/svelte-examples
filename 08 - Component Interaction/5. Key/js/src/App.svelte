<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import ClickMe from './ClickMe.svelte';

  let id = $state(0);

  function handleClick() {
    id += 1;
  }
</script>

<button onclick={handleClick}>Change ID</button>
<br />
{#key id}
  <ClickMe />
{/key}
