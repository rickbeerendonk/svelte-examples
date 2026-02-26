<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import EditBox from './EditBox.svelte';
  import Greeting from './Greeting.svelte';

  let { value } = $props();

  function changed(newValue) {
    value = newValue;
  }

  // $inspect is a special function
  // that allows you to inspect
  // the value of a variable in the
  // Svelte DevTools.
  $inspect(value);
</script>

{@debug value};

<EditBox {value} onchange={changed} />
<Greeting name={value} />
