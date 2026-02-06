<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<!-- eslint-disable svelte/require-each-key -->
<!-- No key needed for this basic form handling educational example -->

<script lang="ts">
  import ChildWithForm from './ChildWithForm.svelte';

  let items = ['Item 1', 'Item 2'];

  function handleAdd(e: CustomEvent<string>) {
    const newItem = e.detail;
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
  <ChildWithForm on:added={handleAdd} />
</div>
