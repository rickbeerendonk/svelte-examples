<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    message?: string;
  }

  let { message = `it's great to see you!` }: Props = $props();

  // Local variables are available in the snippet
</script>

{#snippet hello(name: string)}
  <p>hello {name}! {message}</p>
{/snippet}

{@render hello('Alice')}
{@render hello('Bob')}
