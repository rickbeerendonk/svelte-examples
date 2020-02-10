<script>
  // Guaranteed to successfully resolve
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Svelte');
    }, 1000);
  });
</script>

<style>
  .comment {
    color: gray;
  }
</style>

<p class="comment">No UI while we wait for the promise to resolve:</p>
{#await promise then name}
  <h1>Hello {name}!</h1>
{/await}

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
