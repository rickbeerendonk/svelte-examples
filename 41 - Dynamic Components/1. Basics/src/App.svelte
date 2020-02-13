<script>
  import GreetingDutch from './components/GreetingDutch';
  import GreetingEnglish from './components/GreetingEnglish';
  import GreetingSpanish from './components/GreetingSpanish';

  let language = 'english';

  $: greetingComponent = (function() {
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

<style>
  #result {
    padding: 4px;
    background: lightgray;
  }
</style>

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
