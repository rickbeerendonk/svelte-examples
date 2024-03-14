<script>
  import Child_Subscribe from './Child_Subscribe';
  let visible = true;
</script>

<p class="comment">
  Open the console. Click the button multiple times and see only intervals are
  started and never stopped. An interval is 5 seconds, but see the effect if you
  start many.
</p>
<button on:click={() => (visible = !visible)}>
  {#if visible}Hide{:else}Show{/if}
</button>
{#if visible}
  <Child_Subscribe />
{/if}

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
