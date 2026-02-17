<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import Child from './Child.svelte';

  let callbackData = $state(undefined);

  function greetingChanged(data) {
    console.log(data);
    callbackData = data;
  }
</script>

<div>
  <Child onchange={greetingChanged} />
  <h1>Callback Data</h1>
  {#if callbackData}
    <ul>
      <li>Data: <b>{JSON.stringify(callbackData)}</b></li>
      <li class="remark">Open console for more details.</li>
    </ul>
  {:else}
    <p>Undefined</p>
  {/if}
</div>

<style>
  .remark {
    color: gray;
  }
</style>
