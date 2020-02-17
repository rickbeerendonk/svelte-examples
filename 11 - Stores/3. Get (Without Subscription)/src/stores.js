/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { readable } from 'svelte/store';

export const name = readable('Svelte', function() {
  console.log('▶ Subscribe store');

  return function() {
    console.log('◀ Unsubscribe store');
  };
});
