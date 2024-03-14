<script lang="ts">
  let obj = { deeper: { prop1: true, prop2: 'two', prop3: 0 } };

  function handleClick() {
    const deeper = obj.deeper;
    deeper.prop1 = !deeper.prop1;
    deeper.prop2 += '.';
    deeper.prop3 += 10;

    console.log(JSON.stringify(obj));
  }
</script>

<p class="comment">
  Observe that clicking doesn't update the object. Open the console to see the
  real array length (proof of it's update).
</p>
<button on:click={handleClick}>Change object</button>
<p>{JSON.stringify(obj)}</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
