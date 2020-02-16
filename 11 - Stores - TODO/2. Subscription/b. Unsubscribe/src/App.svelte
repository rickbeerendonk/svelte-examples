<script>
  import { tick } from 'svelte';

  import Child_Set from './Child_Set.svelte';
  import Child_Subscribe from './Child_Subscribe.svelte';

  let visible = true;

  function handleClick() {
    visible = !visible;
  }
</script>

<div>
  <button on:click={handleClick}>
    {#if visible}Hide{:else}Show{/if}
  </button>
  <hr />
  <div>
    <Child_Set />
    {#if visible}
      <Child_Subscribe />
    {/if}
  </div>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
