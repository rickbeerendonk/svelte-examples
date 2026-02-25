/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { mount } from 'svelte';
import Top from './Top.svelte';

const app = mount(Top, {
  target: document.getElementById('app'),
  props: {
    color: 'red'
  }
});

export default app;
