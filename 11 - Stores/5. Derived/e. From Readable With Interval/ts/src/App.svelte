<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import Child_Subscribe from './Child_Subscribe.svelte';
  let visible = $state(true);
</script>

<p class="comment">
  This example demonstrates that if all subscriptions to a derived store are
  unsubscribed, that the derived store is unsubscribing from its sources as
  well.
</p>

<p class="comment">
  Open the console. Click the button multiple times and see intervals are
  started and stopped. An interval is 5 seconds.
</p>

<button onclick={() => (visible = !visible)}>
  {#if visible}Hide{:else}Show{/if}
</button>
{#if visible}
  <Child_Subscribe />
{/if}

<style>
  .comment {
    color: gray;
  }
</style>
