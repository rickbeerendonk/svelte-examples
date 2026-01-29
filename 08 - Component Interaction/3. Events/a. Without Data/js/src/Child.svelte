<script>
  // Svelte 5: Receive callback function as prop instead of using createEventDispatcher
  let { onupdated } = $props();

  function buttonClicked() {
    // Call the callback prop
    onupdated?.();
  }
</script>

<button onclick={buttonClicked}>Click</button>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
