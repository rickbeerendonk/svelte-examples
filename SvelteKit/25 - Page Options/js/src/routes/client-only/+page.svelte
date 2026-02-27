<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2026 Rick Beerendonk          -->

<script>
  import { browser } from '$app/environment';
</script>

<h1>Client-Only Page</h1>

<p>This page only renders in the browser.</p>
<p>Running in browser: {browser}</p>

<p>Display time: {new Date().toISOString()}</p>
