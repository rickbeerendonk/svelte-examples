<script>
  import { count } from './stores';

  function buttonClicked() {
    count.update(value => value + 1);
  }
</script>

<button on:click={buttonClicked}>Click</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
