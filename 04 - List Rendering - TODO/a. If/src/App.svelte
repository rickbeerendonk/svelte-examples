<script>
  let show = true;
</script>

{#if show}
  <span>Visible</span>
{/if}

{#if !show}
  <span>Invisible (not rendered!)</span>
{/if}
