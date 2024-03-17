<script>
  import Greeting from './Greeting.svelte';
  import MouseMove from './Greeting.svelte';
</script>

<MouseMove let:mousePosition={{ x, y }}>
  <Greeting name={'(x:' + x + ', y: ' + y + ')'} />
</MouseMove>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
