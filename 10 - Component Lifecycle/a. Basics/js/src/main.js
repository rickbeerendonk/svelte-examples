/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { mount, unmount } from 'svelte';

import { logEvent } from './utils.js';
import App from './App.svelte';

const app = mount(App, {
  target: document.getElementById('app')
});

setTimeout(() => {
  logEvent('unmount');
  unmount(app);
}, 2000);

export default app;
