/*! Copyright © 2026 Rick Beerendonk !*/

// https://svelte.dev/docs/svelte/svelte-files#.svelte.js-and-.svelte.ts-files

export function useMouseMove() {
  let x = $state(undefined);
  let y = $state(undefined);

  $effect(() => {
    function handleMouseMove(e) {
      x = e.pageX;
      y = e.pageY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  // ❌ Wrong: captures current values, not reactive references!
  // x and y are read once here and never update.
  return { x, y };
}
