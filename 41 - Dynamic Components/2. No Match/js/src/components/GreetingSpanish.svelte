<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  let greeting = $state('Mundo');
</script>

<label> Spanish: <input bind:value={greeting} /> </label>
<p>Hola {greeting}</p>
