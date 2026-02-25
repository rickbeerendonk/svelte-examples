<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import { createCount } from './stores.js';

  const count = createCount(0);

  function handleDec(delta) {
    count.dec(delta);
  }
</script>

<h1>{$count}</h1>
<button onclick={count.inc}>+</button>
<button onclick={() => handleDec()}>-</button>
<button onclick={() => handleDec(5)}>-5</button>
<button onclick={count.reset}>Reset</button>
