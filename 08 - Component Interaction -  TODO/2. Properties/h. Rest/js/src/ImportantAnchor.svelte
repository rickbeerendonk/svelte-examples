<script>
  export let important;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...$$restProps}>{important} <slot /> {important}</a>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->
