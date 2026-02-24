<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Child_Set from './Child_Set.svelte';
  import Child_Subscribe from './Child_Subscribe.svelte';

  let visible = $state(true);

  function handleClick() {
    visible = !visible;
  }
</script>

<button onclick={handleClick}>
  {#if visible}Hide{:else}Show{/if}
</button>
<hr />
<div>
  <Child_Set />
  {#if visible}
    <Child_Subscribe />
  {/if}
</div>
