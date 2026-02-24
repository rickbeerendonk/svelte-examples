<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import { name } from './stores.js';

  function changed(e) {
    name.set(e.target.value);
  }
</script>

<input oninput={changed} />
