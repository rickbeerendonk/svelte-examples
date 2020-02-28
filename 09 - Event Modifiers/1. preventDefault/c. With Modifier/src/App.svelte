<script>
  let date = new Date();
</script>

<form on:submit|preventDefault>
  <p>Page loaded at: {date.toLocaleTimeString()}</p>
  <button>Submit</button>
</form>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
