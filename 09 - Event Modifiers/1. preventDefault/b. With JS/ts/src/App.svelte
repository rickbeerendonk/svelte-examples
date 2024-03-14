<script lang="ts">
  let date = new Date();

  function handleSubmit(e) {
    e.preventDefault();
  }
</script>

<form on:submit={handleSubmit}>
  <p>Page loaded at: {date.toLocaleTimeString()}</p>
  <button>Submit</button>
</form>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
