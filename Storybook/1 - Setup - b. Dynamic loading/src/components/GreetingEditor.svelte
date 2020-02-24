<script>
  import EditBox from './EditBox';
  import Greeting from './Greeting';

  export let value;

  function changed(e) {
    value = e.detail;
  }
</script>

<EditBox {value} on:change={changed} />
<Greeting name={value} />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
