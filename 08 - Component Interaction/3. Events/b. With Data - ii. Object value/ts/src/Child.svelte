<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    name: string;
    onchange?: (data: { name: string }) => void;
  }

  let { name, onchange }: Props = $props();

  function changed(e: Event) {
    onchange?.({
      name: (e.target as HTMLInputElement).value
    });
  }
</script>

<input value={name} onkeyup={changed} />
