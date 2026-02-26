<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  import Greeting from './Greeting.svelte';
  import { useMouseMove } from './useMouseMove.svelte.js';

  const mouse = useMouseMove();
</script>

<Greeting name={'(x:' + mouse.x + ', y: ' + mouse.y + ')'} />
