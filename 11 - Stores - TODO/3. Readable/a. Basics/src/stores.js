import { readable } from 'svelte/store';

export const time = readable(
  // Initial value
  undefined,
  // Internal set
  function(set) {
    setInterval(() => set(new Date()), 2000);
  }
);
