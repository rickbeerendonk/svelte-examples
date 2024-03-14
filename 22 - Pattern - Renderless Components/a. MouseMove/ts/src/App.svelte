<script lang="ts">
  import Greeting from './Greeting';
  import MouseMove from './MouseMove';
</script>

<MouseMove let:mousePosition={{ x, y }}>
  <Greeting name={'(x:' + x + ', y: ' + y + ')'} />
</MouseMove>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
