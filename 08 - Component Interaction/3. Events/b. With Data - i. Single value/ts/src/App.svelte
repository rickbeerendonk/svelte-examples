<script lang="ts">
  import Child from './Child.svelte';

  let greetingText = 'World';

  function greetingChanged(e) {
    greetingText = e.detail;
  }
</script>

<div>
  <Child name={greetingText} on:change={greetingChanged} />
  <h1>Hello {greetingText}</h1>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
