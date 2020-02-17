/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import { readable, derived } from 'svelte/store';

const name1 = readable('svelte');

const name2 = readable('sapper');

export const namesUpperCase = derived(
  // Store(s)
  [name1, name2],
  // Value calculation
  ([n1, n2]) => `${n1.toUpperCase()} and ${n2.toUpperCase()}`
);
