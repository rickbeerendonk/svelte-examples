<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  let { value, onchange } = $props();

  function changed(e) {
    onchange?.(e.target.value);
  }
</script>

<input {value} onkeyup={changed} />
