<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { createCount } from './stores.js';

  let count = createCount(0);

  function handleDec(delta) {
    count.dec(delta);
  }
</script>

<h1>{$count}</h1>
<button on:click={count.inc}>+</button>
<button on:click={() => handleDec()}>-</button>
<button on:click={() => handleDec(5)}>-5</button>
<button on:click={count.reset}>Reset</button>
