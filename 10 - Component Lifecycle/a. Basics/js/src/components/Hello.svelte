<script>
  import { logEvent } from '../utils.js';

  // Props and state
  let { name } = $props();
  let greet = $state('Hello');

  logEvent('construction', { name }, { greet });

  // $effect runs after mount and after each update
  $effect(() => {
    logEvent('$effect (mounted/updated)', { name }, { greet });

    // Return cleanup function (runs on unmount or before next effect)
    return () => {
      logEvent('$effect cleanup', { name }, { greet });
    };
  });
</script>

<h2>{greet} {name}</h2>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
