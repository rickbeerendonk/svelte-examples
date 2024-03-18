<script lang="ts">
  export let count;

  let items = [...Array(count).keys()];
</script>

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
