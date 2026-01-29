<script>
  // Note: Non-reactive data doesn't need $state()
  // Use $state() only if the value will change
  let show = true;
</script>

{#if show}<span>Visible</span>{/if}

{#if !show}<span>Invisible (not rendered!)</span>{/if}

<!--
  Block:
  # = Open
  : = Continue
  / = Close
-->

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
