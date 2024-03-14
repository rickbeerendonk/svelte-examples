<script>
  // Guaranteed to successfully resolve
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

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
