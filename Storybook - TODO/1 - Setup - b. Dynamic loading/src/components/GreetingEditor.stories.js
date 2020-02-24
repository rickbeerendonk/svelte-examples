/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { storiesOf } from '@storybook/svelte';

import GreetingEditor from './GreetingEditor.svelte';

storiesOf('GreetingEditor', module).add('with name', () => ({
  Component: GreetingEditor,
  props: {
    name: 'Storybook'
  }
}));
