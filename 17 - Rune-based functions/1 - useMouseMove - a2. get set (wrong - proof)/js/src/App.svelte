<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  import { useMouseMove } from './useMouseMove.svelte.js';

  const mouse = useMouseMove();
</script>

<!-- ❌ Values are frozen at undefined — move the mouse and nothing changes! -->
<h1>x: {mouse.x}, y: {mouse.y}</h1>
