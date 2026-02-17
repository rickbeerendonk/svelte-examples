<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  interface Props {
    boolProp: boolean | string;
    numberProp: number | string;
    stringProp: string;
  }

  let { boolProp, numberProp, stringProp }: Props = $props();
</script>

<ul>
  <li>Bool: <b>boolProp</b> ({typeof boolProp})</li>
  <li>Number: <b>numberProp</b> ({typeof numberProp})</li>
  <li>String: <b>stringProp</b> ({typeof stringProp})</li>
</ul>
