<div class="container">
  The default item:
  <div class="content">
    <slot />
  </div>
  The 1st item:
  <div class="content">
    <slot name="first" />
  </div>
  The 2nd item:
  <div class="content">
    <slot name="second" />
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
