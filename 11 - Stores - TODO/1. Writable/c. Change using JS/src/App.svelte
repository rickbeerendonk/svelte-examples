<script>
  import { name as storeName } from './stores';

  let name = 0;

  storeName.subscribe(value => (name = value));
</script>

<div>
  <h1>Hello {name}!</h1>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
