<script lang="ts">
  let items = [0, 0, 0];
</script>

<!-- eslint-disable-next-line svelte/require-each-key -->
{#each items as item, index}
  <label>
    {index + 1}:

    <!-- Bindings work inside {#each} -->
    <input type="range" bind:value={item} />
  </label>
{/each}

<ul>
  <!-- eslint-disable-next-line svelte/require-each-key -->
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
