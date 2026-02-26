/*! Copyright © 2026 Rick Beerendonk !*/

// WRONG: Returning raw $state value breaks reactivity!
// The primitive value is captured at call time and never updates.

export function useDocumentHidden() {
  let hidden = $state(document.hidden);

  $effect(() => {
    function handleVisibilityChange() {
      hidden = document.hidden;
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange);
  });

  // WRONG: Returns current value at call time, not a reactive reference
  // When `hidden` is reassigned inside $effect, this returned object
  // still holds the OLD value (the primitive captured when the function was called)
  return {
    hidden // This is just the primitive value, not reactive!
  };
}
