<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  let name = $state('World');
  let ref = $state<HTMLInputElement>();

  $effect(() => {
    ref?.focus();
  });
</script>

<input bind:value={name} bind:this={ref} />
<h1>Hello {name}!</h1>
