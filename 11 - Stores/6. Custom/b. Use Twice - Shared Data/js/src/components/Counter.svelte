<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { count } from '../stores.js';

  function handleDec(delta) {
    count.dec(delta);
  }
</script>

<h1>{$count}</h1>
<button onclick={count.inc}>+</button>
<button onclick={() => handleDec()}>-</button>
<button onclick={() => handleDec(5)}>-5</button>
<button onclick={count.reset}>Reset</button>
