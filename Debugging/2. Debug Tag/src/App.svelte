<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<!-- eslint-disable svelte/no-at-debug-tags -->
<!-- @debug tag is intentionally used for educational purposes -->
<script>
  let count = $state(0);
  let time = $state('');

  setInterval(() => {
    time = Date();
  }, 1000);
</script>

<p class="comment">
  Open the console to see &#123;@debug ...&#125; hitting breakpoints are logging
  to the console.
</p>

<!-- @debug is in a template what console.log() + debugger is in JavaScript -->
<!-- Will not work with properties of objects or array entries -->
{@debug count, time}

<button onclick={() => count++}>This has been clicked {count} times!</button>
<h2>{time}</h2>

<style>
  .comment {
    color: gray;
  }
</style>
