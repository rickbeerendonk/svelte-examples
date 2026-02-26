<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Greeting from './Greeting.svelte';
  import MouseMove from './MouseMove.svelte';
</script>

<MouseMove>
  {#snippet children({ x, y })}
    <Greeting name={'(x:' + x + ', y: ' + y + ')'} />
  {/snippet}
</MouseMove>
