<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  import Middle from './Middle.svelte';

  let color = writable('red');

  function handleSwitch() {
    color.update(value => (value === 'red' ? 'blue' : 'red'));
  }

  setContext('color', color);
</script>

<Middle />
<button on:click={handleSwitch}>Switch color</button>
<p class="comment">
  Observe that the button DOES work, because a context contains a writable.
</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
