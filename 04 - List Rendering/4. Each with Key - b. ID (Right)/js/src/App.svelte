<script>
  let items = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' }
  ];
  let itemId = 4;

  function insertTop() {
    items = [{ id: itemId, name: itemId++ }, ...items];
  }
</script>

<p style="color: gray">
  Add some text in an input and observe what happens if you click the button.
</p>

<button on:click={insertTop}>Insert at Top</button>

<ol>
  {#each [...items] as item, index (item.id)}
    <li value={index}><input placeholder={item.name} /></li>
  {/each}
</ol>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
