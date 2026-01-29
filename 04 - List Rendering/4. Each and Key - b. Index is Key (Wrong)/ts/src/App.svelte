<!-- eslint-disable svelte/require-each-key -->
<!-- Index as key used intentionally to demonstrate the wrong approach for educational purposes -->
<script lang="ts">
  let items = ['one', 'two', 'three'];
  let itemId = 4;

  function insertTop() {
    items = [itemId++, ...items];
  }
</script>

<p style="color: gray">
  Add some text in an input and observe what happens if you click the button.
</p>

<button on:click={insertTop}>Insert at Top</button>

<ol>
  {#each [...items] as item, index (index)}
    <li value={index}><input placeholder={item} /></li>
  {/each}
</ol>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
