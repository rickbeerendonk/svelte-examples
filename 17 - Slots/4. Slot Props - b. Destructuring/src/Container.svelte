<script>
  let data = {
    source: 'Container'
  };
</script>

<style>
  .container {
    background-color: lightgray;
    padding: 10px;
  }

  .content {
    background-color: white;
    padding: 10px;
  }
</style>

<div class="container" let:data>
  Normal:
  <div class="content">
    <slot {data} />
  </div>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
