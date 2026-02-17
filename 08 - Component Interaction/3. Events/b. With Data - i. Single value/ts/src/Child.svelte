<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    name: string;
    onchange?: (value: string) => void;
  }

  let { name, onchange }: Props = $props();

  function changed(e: Event) {
    onchange?.((e.target as HTMLInputElement).value);
  }
</script>

<input value={name} onkeyup={changed} />
