<script>
  let name = '<u>Svelte</u>';
</script>

<h1>
  Escaping: Hello
  {@html name}
  !
</h1>

<h1>NOT escaping: Hello {name} !</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
