<script>
  let obj = { deeper: { prop1: true, prop2: 'two', prop3: 0 } };

  function handleClick() {
    const deeper = obj.deeper;
    deeper.prop1 = !deeper.prop1;
    deeper.prop2 += '.';
    deeper.prop3 += 10;

    // After every "unreactive" change of the object, call obj = obj
    obj = obj;

    console.log(JSON.stringify(obj));
  }
</script>

<style>
  .comment {
    color: gray;
  }
</style>

<p class="comment">Observe that clicking does update the object.</p>
<button on:click={handleClick}>Change object</button>
<p>{JSON.stringify(obj)}</p>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
