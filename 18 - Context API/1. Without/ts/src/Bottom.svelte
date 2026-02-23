<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    color: string;
  }

  let { color }: Props = $props();
</script>

<h1 style={`color: ${color}`}>Bottom</h1>
