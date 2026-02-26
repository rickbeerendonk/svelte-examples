/*! Copyright © 2026 Rick Beerendonk !*/

// https://svelte.dev/docs/svelte/svelte-files#.svelte.js-and-.svelte.ts-files

export function useMouseMove() {
  let position = $state({ x: undefined, y: undefined });

  $effect(() => {
    function handleMouseMove(e) {
      position.x = e.pageX;
      position.y = e.pageY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  // Use getters to preserve reactivity across the function boundary
  // Read-only properties to prevent external mutation
  return {
    get x() {
      return position.x;
    },
    get y() {
      return position.y;
    }
  };
}
