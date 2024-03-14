<script>
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
<h1 on:click={handleClick}>This has been clicked {arr.length} items!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
