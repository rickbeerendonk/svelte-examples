<script>
  let source = 'Container';
</script>

<div class="container" let:source>
  Normal:
  <div class="content">
    <slot {source} />
  </div>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

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
