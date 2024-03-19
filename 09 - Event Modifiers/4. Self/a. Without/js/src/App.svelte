<script>
  let result = [];

  function parentClicked(event) {
    result = [
      ...result,
      `${event.currentTarget.id} received event for ${event.target.id}.`
    ];
  }

  function childClicked(event) {
    result = [...result, `${event.target.id} received event.`];
  }
</script>

<p class="comment">
  Observe that when clicking the child, the parent's on:click handler IS
  triggered.
</p>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id="parent" on:click={parentClicked}>
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

<style>
  .comment {
    color: gray;
  }

  .result {
    color: lightgray;
  }
</style>
