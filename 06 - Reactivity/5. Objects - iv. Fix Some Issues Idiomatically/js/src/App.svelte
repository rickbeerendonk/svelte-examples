<script>
  let obj = { deeper: { prop1: true, prop2: 'two', prop3: 0 } };

  function handleClick() {
    // Does work:
    obj = {
      ...obj,
      deeper: {
        ...obj.deeper,
        prop1: !obj.deeper.prop1,
        prop2: obj.deeper.prop2 + '.',
        prop3: obj.deeper.prop3 + 10
      }
    };

    console.log(JSON.stringify(obj));
  }
</script>

<p class="comment">Observe that clicking does update the object.</p>
<button on:click={handleClick}>Change object</button>
<p>{JSON.stringify(obj)}</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
