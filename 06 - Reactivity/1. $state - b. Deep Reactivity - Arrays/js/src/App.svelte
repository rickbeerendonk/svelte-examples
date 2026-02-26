<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->

<script>
  // $state provides deep reactivity for arrays
  let items = $state([]);

  function addItem() {
    // push() works reactively with $state
    items.push(new Date().toLocaleTimeString());
  }

  function removeFirst() {
    items.shift();
  }
</script>

<p class="comment">
  Arrays with $state have deep reactivity. Methods like push(), pop(), shift(),
  splice() etc. all trigger reactive updates automatically.
</p>

<button onclick={addItem}>Add item</button>
<button onclick={removeFirst} disabled={items.length === 0}>Remove first</button
>

<p>Items: {items.length}</p>
<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>

<style>
  .comment {
    color: gray;
  }
</style>
