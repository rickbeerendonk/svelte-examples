<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let dialog = $state();

  // Action: calls callback when user clicks outside the element.
  function clickOutside(node, callback) {
    function handleClick(event) {
      if (!node.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener('click', handleClick, true);

    return {
      update(newCallback) {
        callback = newCallback;
      },
      destroy() {
        // Clean up the global listener when the element is removed.
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<button onclick={() => dialog.show()}>Open Dialog</button>

<dialog bind:this={dialog} use:clickOutside={() => dialog.close()}>
  <h1>Dialog</h1>
  <p>Dialog content.</p>
</dialog>
