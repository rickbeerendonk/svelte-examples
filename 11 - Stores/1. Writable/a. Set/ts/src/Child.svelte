<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import { name } from './stores.js';

  function changed(
    e: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) {
    name.set(e.currentTarget.value);
  }
</script>

<input oninput={changed} />
