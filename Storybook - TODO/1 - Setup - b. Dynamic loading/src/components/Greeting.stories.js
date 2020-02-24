/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { storiesOf } from '@storybook/svelte';
import { text } from '@storybook/addon-knobs';

import Greeting from './Greeting.svelte';

storiesOf('Greeting', module)
  .add('without name', () => ({
    Component: Greeting
  }))
  .add('with name', () => ({
    Component: Greeting,
    props: {
      name: 'Storybook'
    }
  }))
  .add('knobs', () => ({
    Component: Greeting,
    props: {
      name: text('Name', 'Storybook')
    }
  }));
