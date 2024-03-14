<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount, tick } from 'svelte';
  import { logEvent } from '../utils.js';

  export let props;
  let state = { greet: 'Hello' };

  logEvent('construction', props, state);

  onMount(() => {
    // Called after the component is first rendered to the DOM
    // - Not used during SSR (Server Side Rendering)
    logEvent('onMount', props, state);

    return () => {
      // Called when the component is destroyed
      // - Not used during SSR (Server Side Rendering)
      logEvent('onMount cleanup', props, state);
    };
  });

  onMount(async () => {
    // Called after the component is first rendered to the DOM
    // - Not used during SSR (Server Side Rendering)
    logEvent('async onMount', props, state);

    // Change state
    await tick();
    state = { greet: 'Hi' };

    return () => {
      // NEVER called (because async)
      logEvent('async onMount cleanup', props, state);
    };
  });

  beforeUpdate(() => {
    logEvent('beforeUpdate', props, state);
  });

  afterUpdate(() => {
    logEvent('afterUpdate', props, state);
  });

  onDestroy(() => {
    // Called when the component is destroyed
    // - Not used during SSR (Server Side Rendering)
    logEvent('onDestroy', props, state);
  });
</script>

<h2>{state.greet} {props.name}</h2>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
