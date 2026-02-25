<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let { value = $bindable() } = $props();

  function changed(e) {
    value = e.target.value;
  }
</script>

<input {value} onkeyup={changed} />
