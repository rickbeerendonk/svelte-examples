<script>
  import { setContext } from 'svelte';
  import Middle from './Middle.svelte';

  let color = 'red';

  function handleSwitch() {
    color = color === 'red' ? 'green' : 'red';
  }

  setContext('color', { color });
</script>

<Middle />
<button on:click={handleSwitch}>Switch color</button>
<p class="comment">
  Observe that the button DOES NOT work, because a context is not reactive.
</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
