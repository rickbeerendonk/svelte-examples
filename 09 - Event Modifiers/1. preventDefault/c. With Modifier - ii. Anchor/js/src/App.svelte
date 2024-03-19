<script>
  function handleClick(event) {
    //event.preventDefault();

    alert('Handled in code!');
  }
</script>

<a href="https://svelte.dev" on:click|preventDefault={handleClick}>Svelte!</a>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
