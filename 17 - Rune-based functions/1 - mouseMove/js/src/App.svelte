<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  import Greeting from './Greeting.svelte';
  import { useMouse } from './mouseMove.svelte.js';

  const mouse = useMouse();
</script>

<Greeting name={'(x:' + mouse.x + ', y: ' + mouse.y + ')'} />
