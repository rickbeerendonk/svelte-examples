<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  import { page } from '$app/stores';
</script>

<h1>Custom Error Message</h1>

<ul>
  <li>Status: {$page.status}</li>
  <li>Error Message: {$page.error.message}</li>
  <li>URL: {$page.url}</li>
  <li></li>
  <li>Raw: {JSON.stringify($page)}</li>
</ul>
