<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let arr = [];

  function handleClick() {
    arr.push(new Date());

    console.log(arr.length);
  }
</script>

<p class="comment">
  Observe that clicking doesn't update the number (reflection of an internal
  array length). Open the console to see the real array length (proof of it's
  update).
</p>
<button on:click={handleClick}>
  This has been clicked {arr.length} items!
</button>

<style>
  .comment {
    color: gray;
  }
</style>
