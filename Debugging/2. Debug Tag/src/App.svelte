<script>
  let count = 0;
  let time = '';

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

<button on:click={() => count++}>This has been clicked {count} times!</button>
<h2>{time}</h2>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  .comment {
    color: gray;
  }
</style>
