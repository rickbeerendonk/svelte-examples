<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import Middle from './Middle.svelte';

  interface Props {
    color: string;
  }

  let { color }: Props = $props();
</script>

<Middle {color} />
