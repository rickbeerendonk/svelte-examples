<script>
  let obj = { prop1: true, prop2: 'two', prop3: 0 };

  function handleClick() {
    obj.prop1 = !obj.prop1;
    obj.prop2 += '.';
    obj.prop3 += 10;
    console.log(JSON.stringify(obj));
  }
</script>

<style>
  .comment {
    color: gray;
  }
</style>

<p class="comment">
  Observe that clicking doesn't update the object. Open the console to see the
  real object (proof of it's update).
</p>
<button on:click={handleClick}>Change object</button>
<p>{JSON.stringify(obj)}</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
