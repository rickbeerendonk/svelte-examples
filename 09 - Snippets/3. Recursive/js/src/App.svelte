<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

{#snippet count(n)}
  {#if n <= 5}
    <span>{n}</span>
    {@render count(n + 1)}
  {/if}
{/snippet}

{@render count(1)}
