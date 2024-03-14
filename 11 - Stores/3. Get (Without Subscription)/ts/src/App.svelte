<script lang="ts">
  import Child_Get from './Child_Get.svelte';

  let visible = true;

  function handleClick() {
    visible = !visible;
  }
</script>

<p class="comment">
  Example of getting a value from a store without a subscription.
</p>
<p class="comment">
  Open the console to see that in reality there is a subscribe immediately
  followed by an unsubscribe event. Press the button to call get().
</p>
<button on:click={handleClick}>
  {#if visible}Hide{:else}Show{/if}
</button>
<hr />
<div>
  {#if visible}
    <Child_Get />
  {/if}
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
