<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<!-- eslint-disable svelte/require-each-key -->
<!-- No key needed for this basic form handling educational example -->

<script>
  import ChildWithForm from './ChildWithForm.svelte';

  let items = $state(['Item 1', 'Item 2']);

  function handleAdd(newItem) {
    items = [...items, newItem]; // Reactive assignment
  }
</script>

<div>
  <ul>
    <!-- eslint-disable-next-line svelte/require-each-key -->
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
  <ChildWithForm onadded={handleAdd} />
</div>
