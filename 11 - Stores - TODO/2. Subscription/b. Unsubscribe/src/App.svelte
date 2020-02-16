<script>
  import { tick } from 'svelte';

  import Child1 from './Child1.svelte';
  import Child2 from './Child2.svelte';

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
    <Child1 />
    {#if visible}
      <Child2 />
    {/if}
  </div>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
