<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  import Child from './Child.svelte';
</script>

<Child boolProp={true} numberProp={123} stringProp="text" />

<hr />
<p class="comment">Observe the types are all strings:</p>

<Child boolProp="true" numberProp="123" stringProp="text" />


<style>
  .comment {
    color: gray;
  }
</style>