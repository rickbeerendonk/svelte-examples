<svelte:options immutable={false} />

<script lang="ts">
  export let objWrong;
  export let objCorrect;
</script>

<div>
  <h2>Component Mutable</h2>
  <ul>
    <li>objCorrect.name: <b>{objCorrect.name}</b></li>
    <li>objWrong.name: <b>{objWrong.name}</b></li>
  </ul>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  div {
    border-color: #d676ff;
    border-width: 1px;
  }
</style>
