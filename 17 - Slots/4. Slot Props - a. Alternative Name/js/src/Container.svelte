<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<!-- eslint-disable no-unused-vars -->
<!-- 'source' variable is used in slot props for educational purposes -->
<script>
  let source = 'Container';
</script>

<div class="container">
  Normal:
  <div class="content">
    <slot {source} />
  </div>
</div>

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
