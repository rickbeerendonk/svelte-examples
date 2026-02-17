<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let { onupdated } = $props();

  function buttonClicked() {
    onupdated?.();
  }
</script>

<button onclick={buttonClicked}>Click</button>
