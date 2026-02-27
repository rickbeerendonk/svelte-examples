<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  import { page } from '$app/state';
</script>

<h2>Page {page.params.id}</h2>

<p>
  {JSON.stringify(page)}
</p>
