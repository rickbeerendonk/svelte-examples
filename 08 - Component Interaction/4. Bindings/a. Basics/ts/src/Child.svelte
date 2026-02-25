<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    value: string;
  }

  let { value = $bindable() }: Props = $props();

  function changed(e: Event) {
    value = (e.target as HTMLInputElement).value;
  }
</script>

<input {value} onkeyup={changed} />
