/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import { storiesOf } from '@storybook/svelte';
import { decorate } from '@storybook/addon-actions';

import EditBox from './EditBox.svelte';

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
      change: decorate([(args) => args[0].detail]).action('editbox-change')
    }
  }));
