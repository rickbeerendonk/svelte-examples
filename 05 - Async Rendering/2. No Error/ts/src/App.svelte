<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  // Guaranteed to successfully resolve
  // eslint-disable-next-line no-unused-vars
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Svelte');
    }, 1000);
  });
</script>

{#await promise}
  <p>Loading...</p>
{:then name}
  <h1>Hello {name}!</h1>
{/await}