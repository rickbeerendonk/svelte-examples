<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import Child_Subscribe from './Child_Subscribe.svelte';
  let visible = $state(true);
</script>

<p class="comment">
  Open the console. Click the button multiple times and see only intervals are
  started and never stopped. An interval is 5 seconds, but see the effect if you
  start many.
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
