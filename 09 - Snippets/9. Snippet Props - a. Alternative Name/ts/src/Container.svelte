<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet<[string]>;
  }

  let { children }: Props = $props();

  const source = 'Container';
</script>

<div class="container">
  Normal:
  <div class="content">
    {@render children(source)}
  </div>
</div>

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
