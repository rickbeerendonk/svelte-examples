<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script lang="ts">
  let { onadded }: { onadded?: (name: string) => void } = $props();

  let name = $state('');

  function handleSubmit(e: Event) {
    e.preventDefault();
    onadded?.(name); // Call callback prop with the name
    name = ''; // Clear the input field
  }
</script>

<form onsubmit={handleSubmit}>
  <input bind:value={name} />
  <button type="submit">Add</button>
</form>
