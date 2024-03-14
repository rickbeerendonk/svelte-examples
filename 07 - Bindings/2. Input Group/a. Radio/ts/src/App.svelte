<script lang="ts">
  let checked = 'B';
</script>

<label> <input type="radio" bind:group={checked} value="A" /> A </label>
<label> <input type="radio" bind:group={checked} value="B" /> B </label>
<label> <input type="radio" bind:group={checked} value="C" /> C </label>
<h1>{checked}</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
