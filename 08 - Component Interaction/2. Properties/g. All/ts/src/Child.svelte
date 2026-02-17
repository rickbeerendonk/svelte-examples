<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    [key: string]: unknown;
  }

  let props: Props = $props();
</script>

<h1>{JSON.stringify(props)}!</h1>
