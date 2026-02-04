<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  let selected = ['B', 'C'];
</script>

<select multiple bind:value={selected}>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<h1>{selected}</h1>