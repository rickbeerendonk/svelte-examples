<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  // eslint-disable-next-line no-unused-vars
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Svelte');
      //reject(new Error('Error occurred.'));
    }, 1000);
  });
</script>

{#await promise}
  <p>Loading...</p>
{:then name}
  <!-- name = The outcome of the promise when it resolves -->
  <h1>Hello {name}!</h1>
{:catch error}
  <!-- error = The error object when the promise is rejected -->
  <p style="color: red">{error.message}</p>
{/await}
