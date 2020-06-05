import { writable } from 'svelte/store';

function createCount() {
  const initial = 0;

  const { subscribe, set, update } = writable(initial);

  return {
    subscribe,
    inc: () => update((value) => value + 1),
    dec: (delta = 1) => update((value) => value - delta),
    reset: () => set(initial)
  };
}

export const count = createCount();
