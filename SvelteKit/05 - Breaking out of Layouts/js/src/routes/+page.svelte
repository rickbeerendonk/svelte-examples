<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk          -->

<script>
  import { resolve } from '$app/paths';
</script>

<h2>Home</h2>

<nav>
  <a href={resolve('/section')}>Section (uses section layout)</a>
  <a href={resolve('/section/normal')}>Normal page (uses section layout)</a>
  <a href={resolve('/section/fullscreen')}>Fullscreen (breaks out of layouts)</a
  >
</nav>
