import { writable } from 'svelte/store';

export function createCount(initial = 0) {
  const { subscribe, set, update } = writable(initial);

  return {
    subscribe,
    inc: () => update(value => value + 1),
    dec: (delta = 1) => update(value => value - delta),
    reset: () => set(initial)
  };
}
