<script>
  import ComponentMutable from './ComponentMutable.svelte';
  import ComponentImmutable from './ComponentImmutable.svelte';

  let name = 'Svelte';
  let objWrong = { name };
  let objCorrect = { name };

  function handleInput(e) {
    name = e.target.value;
    objWrong.name = name;
    objCorrect = { name };
  }
</script>

<h1>App</h1>
<input autofocus value={name} on:input={handleInput} />
<p class="comment">
  Observe that the immutable component is optimised and doesn't expect changes
  within objects, unless you replace the whole object.
</p>
<ComponentMutable {objCorrect} {objWrong} />
<ComponentImmutable {objCorrect} {objWrong} />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
