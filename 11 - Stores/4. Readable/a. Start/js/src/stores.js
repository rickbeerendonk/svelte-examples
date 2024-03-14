/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { readable } from 'svelte/store';

export const time = readable(
  // Initial value
  undefined,
  // Start setting values
  function (set) {
    console.log('▶ Start readable store');

    // Internal set
    setInterval(() => set(new Date()), 5000);

    // REMARK: Will never stop, even when there are no listeners!
  }
);
