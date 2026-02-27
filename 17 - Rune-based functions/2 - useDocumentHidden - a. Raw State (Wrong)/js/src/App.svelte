<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  import { useDocumentHidden } from './useDocumentHidden.svelte.js';

  const visibility = useDocumentHidden();

  $inspect(visibility.hidden);
</script>

<h1>Document is {visibility.hidden ? 'hidden' : 'visible'}</h1>
<p class="comment">Switch to another tab and back...</p>
<p class="warning">
  ⚠️ WRONG: This will NOT update! The raw $state value was captured at call
  time.
</p>

<style>
  .comment {
    color: darkgray;
  }
  .warning {
    color: red;
    font-weight: bold;
  }
</style>
