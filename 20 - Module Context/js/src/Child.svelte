<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script context="module">
  // This code runs once (= static), no matter how many <Child> instances exist
  let staticId = 1;
</script>

<script>
  let id = staticId++;
</script>

<h2>Child {id}</h2>
