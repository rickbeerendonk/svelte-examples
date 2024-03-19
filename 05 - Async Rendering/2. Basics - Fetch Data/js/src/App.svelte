<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  const promise = fetch('https://jsonplaceholder.typicode.com/todos').then(
    response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }
  );
</script>

{#await promise}
  <p>Loading...</p>
{:then todos}
  <ul>
    {#each todos as todo}
      <li>{todo.title}</li>
    {/each}
  </ul>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
