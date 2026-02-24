<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  import List from './List.svelte';

  const items = ['Apple', 'Banana', 'Cherry'];
</script>

{#snippet row(item)}
  <li><strong>{item}</strong></li>
{/snippet}

<List {items} {row} />
