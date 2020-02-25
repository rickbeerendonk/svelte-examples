<script>
  let show = true;

  function action(node) {
    console.log('> Element created: ', node);

    return {
      destroy() {
        console.log('< Element destroyed: ', node);
      }
    };
  }
</script>

<style>
  .comment {
    color: gray;
  }
</style>

<p class="comment">
  Open the console to see execution of action when the element is shown/hidden.
</p>

<button on:click={() => (show = !show)}>Toggle</button>

{#if show}
  <div use:action>Element</div>
{/if}

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
