<script>
  let ch,
    cw,
    oh,
    ow = 0;
  let fs = 16;
  let blocks = 3;
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
  }

  .first {
    background-color: bisque;
  }

  .second {
    background-color: azure;
  }
</style>

<label>
  Font size:
  <input type="range" bind:value={fs} min="8" max="40" />
</label>

<div class="container" style="font-size: {fs}px">
  <div class="first" width="100px" height="10px">...</div>
  <div
    class="second"
    bind:clientHeight={ch}
    bind:clientWidth={cw}
    bind:offsetHeight={oh}
    bind:offsetWidth={ow}>
    <ul>
      <li>Client height: <b>{ch}</b></li>
      <li>Client width: <b>{cw}</b></li>
      <li>Offset height: <b>{oh}</b></li>
      <li>Offset width: <b>{ow}</b></li>
    </ul>
  </div>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
