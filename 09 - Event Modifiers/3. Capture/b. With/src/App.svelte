<script>
  let result = [];

  function parentCapturingClicked(event) {
    result = [
      ...result,
      `${event.currentTarget.id} received event for ${event.target.id} in capturing fase.`
    ];
  }

  function parentAtTargetClicked(event) {
    result = [
      ...result,
      `${event.target.id} received event in at target fase.`
    ];
  }

  function parentBubblingClicked(event) {
    result = [
      ...result,
      `${event.currentTarget.id} received event for ${event.target.id} in bubbling fase.`
    ];
  }

  function childClicked(event) {
    result = [...result, `${event.target.id} received event.`];
  }
</script>

<style>
  .comment {
    color: gray;
  }

  .result {
    color: lightgray;
  }
</style>

<p class="comment">
  Observe that when clicking the child, the parent's <b>
    <u>on:click|capture</u>
  </b> handler is triggered BEFORE the child.
</p>

<div
  id="parent"
  on:click|capture={parentCapturingClicked}
  on:click|self={parentAtTargetClicked}
  on:click={parentBubblingClicked}>
  Parent
  <div id="child" on:click={childClicked}>Child</div>
</div>

<ul class="result">
  {#each result as item}
    <li>{item}</li>
  {/each}
</ul>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
