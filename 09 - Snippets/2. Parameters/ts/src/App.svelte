<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script lang="ts"></script>

{#snippet greeting(name: string)}
  <p>Hello {name}!</p>
{/snippet}

{@render greeting('Alexandra')}
{@render greeting('Benjamin')}
