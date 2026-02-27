<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  import { useDocumentHidden } from './useDocumentHidden.svelte.js';

  const visibility = useDocumentHidden();

  $inspect(visibility.hidden);
</script>

<h1>Document is {visibility.hidden ? 'hidden' : 'visible'}</h1>
<p class="comment">Switch to another tab and back to see the change.</p>

<style>
  .comment {
    color: darkgray;
  }
</style>
