<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script lang="ts">
  import ChildWithForm from './ChildWithForm.svelte';

  let items = $state(['Item 1', 'Item 2']);

  function handleAdd(newItem: string) {
    items.push(newItem);
  }
</script>

<div>
  <!-- The key block ensures the ChildWithForm component is 
       recreated when items.length changes -->
  {#key items.length}
    <ChildWithForm onadded={handleAdd} />
  {/key}
  <ul>
    <!-- eslint-disable-next-line svelte/require-each-key -->
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
</div>
