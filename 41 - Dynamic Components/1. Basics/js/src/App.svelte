<script>
  import GreetingDutch from './components/GreetingDutch.svelte';
  import GreetingEnglish from './components/GreetingEnglish.svelte';
  import GreetingSpanish from './components/GreetingSpanish.svelte';

  let language = 'english';

  $: greetingComponent = (function () {
    switch (language) {
      case 'dutch':
        return GreetingDutch;
      case 'spanish':
        return GreetingSpanish;
      default:
        return GreetingEnglish;
    }
  })();
</script>

<label>
  <input bind:group={language} type="radio" value="dutch" />
  Dutch
</label>
<label>
  <input bind:group={language} type="radio" value="english" />
  English
</label>
<label>
  <input bind:group={language} type="radio" value="spanish" />
  Spanish
</label>

<div id="result">
  <svelte:component this={greetingComponent} />
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  #result {
    padding: 4px;
    background: lightgray;
  }
</style>
