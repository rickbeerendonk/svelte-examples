<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  let count = $state(0);
</script>

<!-- No performance problems with inline handlers -->
<button onclick={() => count++}>This has been clicked {count} times!</button>
