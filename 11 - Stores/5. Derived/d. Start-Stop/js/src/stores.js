/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { derived, writable } from 'svelte/store';

export const frequency = writable(1);

export const tick = derived(frequency, ($frequency, set) => {
  console.log('▶ Start readable store interval');

  const interval = setInterval(() => {
    set(new Date());
  }, 1000 / $frequency);

  return () => {
    console.log('◀ Stop derived store interval');

    clearInterval(interval);
  };
});
