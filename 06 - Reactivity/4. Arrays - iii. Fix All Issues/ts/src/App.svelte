<script lang="ts">
  let arr = [];

  function handleClick() {
    arr.push(new Date());
    // After every "unreactive" change of the array, call arr = arr
    arr = arr;
  }
</script>

<p class="comment">
  Observe that clicking does update the number (reflection of an internal array
  length).
</p>
<button on:click={handleClick}>This has been clicked {arr.length} items!</button
>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
