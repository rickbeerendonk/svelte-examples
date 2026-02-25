<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  let greeting = $state('Wereld');
</script>

<label> Dutch: <input bind:value={greeting} /> </label>
<p>Hallo {greeting}</p>
