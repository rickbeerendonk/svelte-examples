<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let { name, onchange } = $props();

  function changed(e) {
    onchange?.({
      name: e.target.value
    });
  }
</script>

<input value={name} onkeyup={changed} />
