<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

{#snippet greeting(name)}
  <p>Hello {name}!</p>
{/snippet}

{@render greeting('Alexandra')}
{@render greeting('Benjamin')}
