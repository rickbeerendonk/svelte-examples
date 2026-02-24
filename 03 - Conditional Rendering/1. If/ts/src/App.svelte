<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  const show = true;
</script>

{#if show}<span>Visible</span>{/if}

{#if !show}<span>Invisible (not rendered!)</span>{/if}

<!--
  Block:
  # = Open
  : = Continue
  / = Close
-->
