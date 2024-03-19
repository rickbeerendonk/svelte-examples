<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<div class="container">
  The only item:
  <div class="content">
    <!-- Alternative content if there is no slot -->
    <slot>Default Slot Value</slot>
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
