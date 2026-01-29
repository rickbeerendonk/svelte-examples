<script lang="ts">
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
  <h1>Hello {name}!</h1>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<!-- European Union Public License version 1.2 -->
