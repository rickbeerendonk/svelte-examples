<script>
  let arr = [];

  function handleClick() {
    // Doesn't work:
    //arr.push(new Date());

    // Does work:
    arr = [...arr, new Date()];
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
