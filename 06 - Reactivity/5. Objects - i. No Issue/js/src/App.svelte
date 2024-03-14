<script>
  let obj = { prop1: true, prop2: 'two', prop3: 0 };

  function handleClick() {
    obj.prop1 = !obj.prop1;
    obj.prop2 += '.';
    obj.prop3 += 10;
  }
</script>

<p class="comment">
  Observe that clicking does update the object. As long as the object variable
  name is on the left side of the assignment, reactivity works.
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
