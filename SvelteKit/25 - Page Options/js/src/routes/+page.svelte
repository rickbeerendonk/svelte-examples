<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk          -->

<script>
  import { resolve } from '$app/paths';
</script>

<h1>Page Options</h1>

<nav>
  <ul>
    <li><a href={resolve('/prerendered')}>Prerendered Page</a></li>
    <li><a href={resolve('/client-only')}>Client-Only Page</a></li>
  </ul>
</nav>
