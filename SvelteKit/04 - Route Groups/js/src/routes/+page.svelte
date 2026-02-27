<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk          -->

<script>
  import { resolve } from '$app/paths';
</script>

<h1>Route Groups</h1>

<nav>
  <ul>
    <li><a href={resolve('/page1')}>Page 1 (group 1 layout)</a></li>
    <li><a href={resolve('/page2')}>Page 2 (group 1 layout)</a></li>
    <li><a href={resolve('/page3')}>Page 3 (group 2 layout)</a></li>
    <li><a href={resolve('/page4')}>Page 4 (group 2 layout)</a></li>
  </ul>
</nav>
