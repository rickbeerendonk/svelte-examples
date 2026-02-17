<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    name?: string;
  }

  let { name = 'World' }: Props = $props();
</script>

<h1>Hello {name}!</h1>
