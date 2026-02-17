<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    onupdated?: () => void;
  }

  let { onupdated }: Props = $props();

  function buttonClicked() {
    onupdated?.();
  }
</script>

<button onclick={buttonClicked}>Click</button>
