<script>
  let cw,
    ch = 0;
  let fs = 16;
</script>

<style>
  .comment {
    color: gray;
  }
</style>

<p class="comment">
  Change font size to influence div's height. Change browser window width to
  influence div's width.
</p>

<label>
  Font size:
  <input type="range" bind:value={fs} min="8" max="40" />
</label>

<div bind:clientWidth={cw} bind:clientHeight={ch}>
  <ul style="font-size: {fs}px">
    <li>
      Client height:
      <b>{ch}</b>
    </li>
    <li>
      Client width:
      <b>{cw}</b>
    </li>
  </ul>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
