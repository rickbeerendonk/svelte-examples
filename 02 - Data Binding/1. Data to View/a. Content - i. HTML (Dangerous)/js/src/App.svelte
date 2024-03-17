<script>
  let name = '<u>Svelte</u>';
  //let name = '<u onmouseover=alert("Hacked!")>Dangerous</u>';
</script>

<h1>
  <!-- Sanitize before using {@html} -->
  Escaping: Hello
  {@html name}
  !
</h1>

<h1>NOT escaping: Hello {name} !</h1>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
