<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  import ChildWithForm from './ChildWithForm.svelte';

  let items = ['Item 1', 'Item 2'];

  function handleAdd(e) {
    const newItem = e.detail;
    items = [...items, newItem]; // Reactive assignment
  }
</script>

<div>
  <ul>
    {#each items as item}
      <li>{item}</li>
    {/each}
  </ul>
  <ChildWithForm on:added={handleAdd} />
</div>
