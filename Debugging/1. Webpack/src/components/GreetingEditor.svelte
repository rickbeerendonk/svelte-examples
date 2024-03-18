<script>
  import EditBox from './EditBox';
  import Greeting from './Greeting.svelte';

  export let value;

  function changed(e) {
    value = e.detail;
  }
</script>

<EditBox {value} on:change={changed} />
<Greeting name={value} />
