<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk -->

<script>
  let { important = '!!!', children, ...rest } = $props();
</script>

<a {...rest}>{important} {@render children()} {important}</a>
