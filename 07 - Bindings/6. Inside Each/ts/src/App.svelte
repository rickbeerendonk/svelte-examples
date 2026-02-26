<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  let items = $state([0, 0, 0]);
</script>

<!-- eslint-disable-next-line svelte/require-each-key -->
{#each items as item, index}
  <label>
    {index + 1}:

    <!-- Bindings work inside {#each}, 
         but you need to bind to 
         the array element directly -->
    <!--  <input type="range" bind:value={item} /> -->
    <input type="range" bind:value={items[index]} />
  </label>
{/each}

<ul>
  <!-- eslint-disable-next-line svelte/require-each-key -->
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
