<script lang="ts">
  import { frequency, tick } from './stores';
</script>

<p class="comment">
  Open the console. Observe the Derived Store's Interval is started and stopped
  on every dependency change.
</p>

<input type="number" bind:value={$frequency} />
{#if $tick}
  <h1>{$tick.getUTCSeconds()}.{$tick.getUTCMilliseconds()}</h1>
{/if}

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
