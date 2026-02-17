<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let { onchange } = $props();

  let name = $state('Svelte');

  function changed(e) {
    onchange?.({
      name: e.target.value
    });
  }
</script>

<input value={name} onkeyup={changed} />
