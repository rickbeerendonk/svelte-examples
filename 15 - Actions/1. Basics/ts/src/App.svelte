<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  let show = $state(true);

  function action(node) {
    console.log('> Element created: ', node);

    return {
      destroy() {
        console.log('< Element destroyed: ', node);
      }
    };
  }
</script>

<p class="comment">
  Open the console to see execution of action when the element is shown/hidden.
</p>

<button onclick={() => (show = !show)}>Toggle</button>

{#if show}
  <div use:action>Element</div>
{/if}

<style>
  .comment {
    color: gray;
  }
</style>
