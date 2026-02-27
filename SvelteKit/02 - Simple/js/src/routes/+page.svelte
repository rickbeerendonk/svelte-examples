<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  // Use href={resolve('/page2')} to resolve relative links to the correct absolute path,
  // especially when the app is deployed in a subdirectory.
  import { resolve } from '$app/paths';
</script>

<h2>Home</h2>

<a href={resolve('/page1')}>Page 1</a>
