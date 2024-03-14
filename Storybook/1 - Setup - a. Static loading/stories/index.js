/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { storiesOf } from '@storybook/svelte';
import { decorate } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import EditBox from '../src/components/EditBox.svelte';
import Greeting from '../src/components/Greeting.svelte';
import GreetingEditor from '../src/components/GreetingEditor.svelte';

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

storiesOf('EditBox', module)
  .add('with value', () => ({
    Component: EditBox,
    props: {
      value: 'Test'
    },
    on: {
      onChange: () => {}
    }
  }))
  .add('with onChange', () => ({
    Component: EditBox,
    on: {
      change: decorate([args => args[0].detail]).action('editbox-change')
    }
  }));

storiesOf('GreetingEditor', module).add('with value', () => ({
  Component: GreetingEditor,
  props: {
    value: 'Storybook'
  }
}));
