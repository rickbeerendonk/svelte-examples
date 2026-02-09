<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  let { count } = $props();

  let items = [...Array(count).keys()];
</script>

<ul>
  {#each items as item (item)}
    <li>{item}</li>
  {/each}
</ul>
