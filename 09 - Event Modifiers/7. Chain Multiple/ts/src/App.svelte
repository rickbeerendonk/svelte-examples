<script lang="ts">
  let result = [];

  function parentCapturingClicked(event) {
    result = [
      ...result,
      `${event.currentTarget.id} received event for ${event.target.id} in capturing fase.`
    ];
  }

  function childClicked(event) {
    result = [...result, `${event.target.id} received event.`];
  }
</script>

<p class="comment">
  Observe that when clicking the child repeatedly, the parent's on:click|capture
  handler is triggered ONCE BEFORE the child.
</p>

<div id="parent" on:click|capture|once={parentCapturingClicked}>
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
