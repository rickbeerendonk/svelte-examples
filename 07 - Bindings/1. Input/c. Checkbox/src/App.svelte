<script>
  let checked = false;
</script>

<label>
  type = checkbox:
  <!-- bind:checked={checked} -->
  <input type="checkbox" bind:checked />
</label>

<h1>Checked is of type {typeof checked} and has value {checked}</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
