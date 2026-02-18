<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let param = $state('');

  setInterval(() => {
    param = Date();
  }, 1000);

  function action(node, param) {
    console.log(`> Element created: ${node} (with param ${param})`);

    return {
      update(param) {
        console.log(`- Element updated: ${node} (with param ${param})`);
      },
      destroy() {
        console.log('< Element destroyed: ', node);
      }
    };
  }
</script>

<p class="comment">
  Open the console to see execution of action when the element is receiving new
  params.
</p>

<div use:action={param}>Element</div>

<style>
  .comment {
    color: gray;
  }
</style>
