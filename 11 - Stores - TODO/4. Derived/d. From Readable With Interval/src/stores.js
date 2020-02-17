/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { readable, derived } from 'svelte/store';

const date = readable(
  // Initial value
  new Date(),
  // Start setting values
  function(set) {
    console.log('▶ Start readable store');

    // Internal set
    const intervalId = setInterval(() => set(new Date()), 5000);

    // Stop setting values when there are no listeners
    return function() {
      clearInterval(intervalId);
      console.log('◀ Stop readable store');
    };
  }
);

export const time = derived(
  // Store(s)
  date,
  // Value calculation
  $date => $date.toLocaleTimeString()
);
