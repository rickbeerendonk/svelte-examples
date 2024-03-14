<script lang="ts">
  let result = [];

  function parentSelfClicked(event) {
    result = [
      ...result,
      `${event.currentTarget.id} received event for ${event.target.id} (Self).`
    ];
  }

  function childClicked(event) {
    result = [...result, `${event.target.id} received event (Standard).`];
  }

  function childSelfClicked(event) {
    result = [...result, `${event.target.id} received event (Self).`];
  }
</script>

<p class="comment">
  Observe that when clicking the child, the parent's on:click handler IS NOT
  triggered.
</p>

<div id="parent" on:click|self={parentSelfClicked}>
  Parent
  <div id="child" on:click={childClicked} on:click|self={childSelfClicked}>
    Child
  </div>
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
