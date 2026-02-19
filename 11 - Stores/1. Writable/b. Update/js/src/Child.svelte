<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { count } from './stores.js';

  function buttonClicked() {
    count.update(value => value + 1);
  }
</script>

<button onclick={buttonClicked}>Click</button>
