<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  let { arrayProp, objectProp } = $props();
</script>

<ul>
  <li>Array: {JSON.stringify(arrayProp)}</li>
  <li>Object: {JSON.stringify(objectProp)}</li>
</ul>
