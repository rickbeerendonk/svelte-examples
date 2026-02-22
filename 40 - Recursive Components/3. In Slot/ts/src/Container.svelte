<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  let recursive = $state(false);
</script>

<button onclick={() => (recursive = true)} disabled={recursive}>
  Hello World!
</button>
{#if recursive}
  <div class="container">
    The only item:
    <div class="content">
      {@render children()}
    </div>
  </div>
{/if}

<style>
  .container {
    background-color: lightgray;
    padding: 10px;
  }

  .content {
    background-color: white;
    padding: 10px;
  }
</style>
