<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  let { onadded } = $props();

  let name = $state('');

  function handleSubmit(e) {
    e.preventDefault();
    onadded?.(name); // Call callback prop with the name
    // No clear/reset here!
  }
</script>

<form onsubmit={handleSubmit}>
  <input bind:value={name} />
  <button type="submit">Add</button>
</form>
