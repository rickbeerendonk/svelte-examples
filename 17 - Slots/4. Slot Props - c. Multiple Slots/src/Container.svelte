<script>
  let source = 'Container';
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

<div class="container">
  Normal:
  <div class="content">
    <slot name="first" />
  </div>
  Slot prop:
  <div class="content">
    <!-- Pass the source as prop -->
    <slot name="second" {source} />
  </div>
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
