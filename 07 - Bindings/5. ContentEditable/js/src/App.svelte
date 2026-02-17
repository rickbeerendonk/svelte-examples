<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let text = $state('Svelte');
</script>

<div contenteditable="true" bind:innerHTML={text}></div>
<p>{text}</p>

<style>
  div {
    border: 1px solid gray;
  }
</style>
