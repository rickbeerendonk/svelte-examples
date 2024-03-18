/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: 'Svelte'
  }
});

export default app;
