<script>
  let arr = [];

  function handleClick() {
    arr.push(new Date());

    console.log(arr.length);
  }
</script>

<style>
  .comment {
    color: gray;
  }
</style>

<p class="comment">
  Observe that clicking doesn't update the number (reflection of an internal
  array length). Open the console to see the real array length (proof of it's
  update).
</p>
<h1 on:click={handleClick}>This has been clicked {arr.length} items!</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
