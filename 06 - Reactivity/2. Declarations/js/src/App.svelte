<script>
  let name = 'Svelte';
  $: uppercaseName = name.toUpperCase();

  function handleChange(e) {
    name = e.target.value;
  }
</script>

<input value={name} on:input={handleChange} />
<h1>Hello {name}!</h1>
<h1>Hello {uppercaseName}!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
