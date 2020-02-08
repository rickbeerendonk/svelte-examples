<script>
  let count = 0;
</script>

<label>
  type = number:
  <input type="number" bind:value={count} />
</label>

<br />

<label>
  type = range:
  <input type="range" bind:value={count} />
</label>

<h1>Count is of type {typeof count} and has value {count}</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
