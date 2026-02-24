<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script lang="ts">
  import List from './List.svelte';

  const items: string[] = ['Apple', 'Banana', 'Cherry'];
</script>

{#snippet row(item: string)}
  <li><strong>{item}</strong></li>
{/snippet}

<List {items} {row} />
