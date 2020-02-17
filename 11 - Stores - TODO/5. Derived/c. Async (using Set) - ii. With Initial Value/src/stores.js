/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { readable, derived } from 'svelte/store';

const name = readable('svelte');

export const nameUpperCase = derived(
  // Store(s)
  name,
  // Value calculation using set (instead of return)
  function(value, set) {
    // After 1 second:
    setTimeout(() => set(value.toUpperCase()), 1000);
  },
  // Initial value
  `...processing...`
);
