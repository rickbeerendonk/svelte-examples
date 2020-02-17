<script>
  import Child_Subscribe from './Child_Subscribe';
  let visible = true;
</script>

<style>
  .comment {
    color: gray;
  }
</style>

<p class="comment">
  Open the console. Click the button multiple times and see intervals are
  started and stopped. An interval is 5 seconds.
</p>

<button on:click={() => (visible = !visible)}>
  {#if visible}Hide{:else}Show{/if}
</button>
{#if visible}
  <Child_Subscribe />
{/if}

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
