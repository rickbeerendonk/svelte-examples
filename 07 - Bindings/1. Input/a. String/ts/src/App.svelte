<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  let name = $state('Svelte');
</script>

<label> One way: <input value={name} /> </label>

<br />

<label>
  Two way (long):
  <input value={name} oninput={e => (name = e.currentTarget.value)} />
</label>

<br />

<label> Two way (short): <input bind:value={name} /> </label>

<h1>Hello {name}!</h1>
