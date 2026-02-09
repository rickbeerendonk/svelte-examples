<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Greeting from './Greeting.svelte';

  const props = {
    greet: 'Hello',
    name: 'Svelte'
  };
</script>

<Greeting {...props} />