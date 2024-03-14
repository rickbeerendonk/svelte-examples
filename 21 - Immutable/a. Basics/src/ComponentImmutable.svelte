<svelte:options immutable={true} />

<script>
  export let objWrong;
  export let objCorrect;
</script>

<div>
  <h2>Component Immutable</h2>
  <ul>
    <li>objCorrect.name: <b>{objCorrect.name}</b></li>
    <li>objWrong.name: <b>{objWrong.name}</b></li>
  </ul>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  div {
    border-color: #444;
    border-width: 1px;
  }
</style>
