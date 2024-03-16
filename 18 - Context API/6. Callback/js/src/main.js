/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import Top from './Top.svelte';

const app = new Top({
  target: document.getElementById('app'),
  props: {
    color: 'red'
  }
});

export default app;
