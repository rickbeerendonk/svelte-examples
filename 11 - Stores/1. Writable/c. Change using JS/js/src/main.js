/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { mount } from 'svelte';
import App from './App.svelte';

// Activate code.js (for interval)
import {} from './code';

const app = mount(App, {
  target: document.getElementById('app')
});

export default app;
