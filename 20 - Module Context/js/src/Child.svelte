<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script module>
  // This code runs once (= static), no matter how many <Child> instances exist.
  // Reason: <script module> compiles to ES module top-level code. JS modules
  // are evaluated only once when first imported, then cached — so this block
  // runs when Child.svelte is first imported, not per instance.
  // Proof: this log appears once, while the instance log below appears per instance.
  console.log('module: runs once');
  let staticId = 1;
</script>

<script>
  // Proof: this log appears once per instance (3x for 3 <Child /> in App.svelte)
  console.log('instance: runs per instance');
  const id = staticId++;
</script>

<h2>Child {id}</h2>
