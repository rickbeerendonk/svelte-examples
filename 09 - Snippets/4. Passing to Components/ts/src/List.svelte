<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    items: string[];
    row: Snippet<[string]>;
  }

  let { items, row }: Props = $props();
</script>

<ul>
  {#each items as item (item)}
    {@render row(item)}
  {/each}
</ul>
