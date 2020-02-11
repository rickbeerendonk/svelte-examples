# Corner Case Knowledge

## Component Lifecycle

Async called onMount()'s return value is never used.

```html
<script>
  import { onMount } from 'svelte';

  onMount(async () => {
  	...

  	return () => {
      // Never called
    };
  });
</script>
```

## Licence

European Union Public Licence version 1.2

## Copyright

Copyright © 2019-2020 Rick Beerendonk
