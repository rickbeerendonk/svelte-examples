<script>
  let text = 'Svelte';
</script>

<style>
  div {
    border: 1px solid gray;
  }
</style>

<div contenteditable="true" bind:innerHTML={text} />
<p>{text}</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
