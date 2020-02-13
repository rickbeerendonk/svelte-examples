<script>
  import Child from './Child';
</script>

<style>
  .comment {
    color: gray;
  }
</style>

<Child boolProp={true} numberProp={123} stringProp="text" />

<hr />
<p class="comment">Observe the types are all strings:</p>

<Child boolProp="true" numberProp="123" stringProp="text" />

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
