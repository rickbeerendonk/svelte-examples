<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Child from './Child.svelte';

  let greetingText = $state('World');

  function greetingChanged(data) {
    greetingText = data.name;
  }
</script>

<div>
  <Child name={greetingText} onchange={greetingChanged} />
  <h1>Hello {greetingText}</h1>
</div>
