<script>
  let mousePosition = {
    x: undefined,
    y: undefined
  };

  function handleMouseMove(e) {
    mousePosition = { x: e.pageX, y: e.pageY };
  }
</script>

<svelte:window on:mousemove={handleMouseMove} />

<span>
  <slot {mousePosition} />
</span>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
