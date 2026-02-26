<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->

<script>
  // $effect runs side effects when dependencies change
  let mousePosition = $state({ x: 0, y: 0 });

  // Runs on mount
  $effect(() => {
    function handleMouseMove(e) {
      mousePosition = { x: e.clientX, y: e.clientY };
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<p>Mouse is at: {mousePosition.x}, {mousePosition.y}</p>
