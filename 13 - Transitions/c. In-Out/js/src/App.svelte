<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import { fade } from 'svelte/transition';

  let visible = $state(true);
</script>

<label> <input type="checkbox" bind:checked={visible} /> Visible </label>

{#if visible}
  <!--
    in: and out: directives allow separate transitions for enter/exit.
    Use transition: when the same transition applies to both directions.
  -->

  <h1 in:fade={{ duration: 3000 }} out:fade={{ duration: 400 }}>
    Hello Svelte!
  </h1>
  <h2
    transition:fade={{
      duration: 1000,
      delay: 1000
    }}
  >
    This text fades in and out equally.
  </h2>
{/if}
