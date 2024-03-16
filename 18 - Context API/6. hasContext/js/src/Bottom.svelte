<script>
  import { hasContext } from 'svelte';

  let hasOne = hasContext('one');
  let hasTwo = hasContext('two');
</script>

<h1>Has context One: {hasOne}</h1>
<h1>Has context Two: {hasTwo}</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->
