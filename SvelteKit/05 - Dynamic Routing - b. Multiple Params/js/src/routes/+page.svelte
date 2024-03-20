<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  let size = 4;
  let color = 'red';
</script>

<h2>Home</h2>

<label>Size: <input type="number" bind:value={size} /></label>
<br />
<label
  >Color:
  <select bind:value={color}>
    <option value="blue">Blue</option>
    <option value="green">Green</option>
    <option value="red">Red</option>
    <option value="yellow">Yellow</option>
  </select>
</label>

<hr />

<a href="\shirt\{size}\{color}">{`Go to your ${color} shirt, size ${size}`}</a>
