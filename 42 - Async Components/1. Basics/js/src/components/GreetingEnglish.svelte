<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let greeting = $state('World');
</script>

<label> English: <input bind:value={greeting} /> </label>
<p>Hello {greeting}</p>
