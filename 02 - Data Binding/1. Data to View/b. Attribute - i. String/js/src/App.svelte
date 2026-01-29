<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2019 Rick Beerendonk -->

<script>
  let name = 'Svelte';
</script>

<input value={name} />

<input value="Fixed" />

<input type="date" value={new Date().toISOString().substring(0, 10)} />
