<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let arr = [1, 2];

  function handleClick() {
    arr[0] = arr[1] + 1;
    arr[1] = arr[0] + 2;
  }
</script>

<p class="comment">
  Observe that clicking does update the array. As long as the array variable
  name is on the left side of the assignment, reactivity works.
</p>
<button on:click={handleClick}>Change array</button>
<p>{JSON.stringify(arr)}</p>

<style>
  .comment {
    color: gray;
  }
</style>
