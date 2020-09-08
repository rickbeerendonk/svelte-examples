<script>
  import Child from './Child.svelte';

  let eventObject = undefined;

  function greetingChanged(e) {
    console.log(e);
    eventObject = e;
  }
</script>

<style>
  .remark {
    color: gray;
  }
</style>

<div>
  <Child on:change={greetingChanged} />
  <h1>Event Object</h1>
  {#if eventObject}
    <ul>
      <li>Type: <b>{eventObject.type}</b></li>
      <li>Detail: <b>{JSON.stringify(eventObject.detail)}</b></li>
      <li class="remark">Open console for more properties.</li>
    </ul>
  {:else}
    <p>Undefined</p>
  {/if}
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
