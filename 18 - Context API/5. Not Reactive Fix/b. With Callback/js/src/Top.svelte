<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { setContext } from 'svelte';
  import Middle from './Middle.svelte';

  let color = $state('red');
  let changeCallback = $state(null);

  function notifyChange() {
    if (changeCallback) {
      changeCallback(color);
    }
  }

  function setColor(value) {
    color = value;
    notifyChange();
  }

  function setChangeCallback(callback) {
    changeCallback = callback;
    notifyChange();
  }

  function handleSwitch() {
    setColor(color === 'red' ? 'blue' : 'red');
  }

  setContext('color', { setChangeCallback });
</script>

<Middle />
<button onclick={handleSwitch}>Switch color</button>
<p class="comment">
  Observe that the button DOES work, because a context is reactive.
</p>

<style>
  .comment {
    color: gray;
  }
</style>
