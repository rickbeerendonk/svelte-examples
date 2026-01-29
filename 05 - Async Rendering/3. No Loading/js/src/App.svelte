<script>
  // Guaranteed to successfully resolve
  // eslint-disable-next-line no-unused-vars
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Svelte');
    }, 1000);
  });
</script>

<p class="comment">No UI while we wait for the promise to resolve:</p>
{#await promise then name}
  <h1>Hello {name}!</h1>
{/await}

<style>
  .comment {
    color: gray;
  }
</style>
