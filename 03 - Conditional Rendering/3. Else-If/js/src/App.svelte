<script>
  let language = 'nl';
</script>

{#if language === 'en'}
  <span>English</span>
{:else if language === 'es'}
  <span>Español</span>
{:else if language === 'nl'}
  <span>Nederlands</span>
{:else}<span>Unknown</span>{/if}

<!--
  Block:
  # = Open
  : = Continue
  / = Close
-->

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
