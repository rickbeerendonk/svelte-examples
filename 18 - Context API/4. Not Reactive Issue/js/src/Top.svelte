<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { setContext } from 'svelte';
  import Middle from './Middle.svelte';

  let color = $state('red');

  function handleSwitch() {
    color = color === 'red' ? 'blue' : 'red';
  }

  setContext('color', { color });
</script>

<Middle />
<button onclick={handleSwitch}>Switch color</button>
<p class="comment">
  Observe that the button DOES NOT work, because a context is not reactive.
</p>

<style>
  .comment {
    color: gray;
  }
</style>
