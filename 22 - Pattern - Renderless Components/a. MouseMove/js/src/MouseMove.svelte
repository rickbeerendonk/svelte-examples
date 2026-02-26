<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  // Renderless components are components that
  // don't render any HTML themselves.
  // Instead, they provide some functionality
  // to their children via a special API.
  // In Svelte 5, rune-based functions are the
  // recommended way to create renderless components.

  let { children } = $props();

  let mousePosition = $state({
    x: undefined,
    y: undefined
  });

  function handleMouseMove(e) {
    mousePosition = { x: e.pageX, y: e.pageY };
  }
</script>

<svelte:window onmousemove={handleMouseMove} />

<span>
  {@render children(mousePosition)}
</span>
