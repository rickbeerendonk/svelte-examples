<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  let { message = `it's great to see you!` } = $props();

  // Local variables are available in the snippet
</script>

{#snippet hello(name)}
  <p>hello {name}! {message}</p>
{/snippet}

{@render hello('Alice')}
{@render hello('Bob')}
