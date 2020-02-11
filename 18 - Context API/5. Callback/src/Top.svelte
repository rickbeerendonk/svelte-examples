<script>
  import { setContext } from 'svelte';
  import colorContext from './color-context';
  import Middle from './Middle';

  let color = 'red';
  let changeCallback = null;

  function notifyChange() {
    if (changeCallback) changeCallback(color);
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
    setColor(color === 'red' ? 'green' : 'red');
  }

  setContext(colorContext, { setChangeCallback, handleSwitch });
</script>

<style>
  .comment {
    color: gray;
  }
</style>

<Middle />
<p class="comment">
  Observe that the button DOES work, because we use callbacks to circumvent the
  reactivity issue.
</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
