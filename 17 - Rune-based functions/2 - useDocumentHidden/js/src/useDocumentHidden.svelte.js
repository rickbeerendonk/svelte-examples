/*! Copyright © 2026 Rick Beerendonk !*/

// https://svelte.dev/docs/svelte/svelte-files#.svelte.js-and-.svelte.ts-files

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

  return {
    get hidden() {
      return hidden;
    }
  };
}
