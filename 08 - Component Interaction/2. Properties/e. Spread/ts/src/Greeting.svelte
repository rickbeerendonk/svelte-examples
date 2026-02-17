<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    greet: string;
    name: string;
  }

  let { greet, name }: Props = $props();
</script>

<h1>{greet} {name}!</h1>
