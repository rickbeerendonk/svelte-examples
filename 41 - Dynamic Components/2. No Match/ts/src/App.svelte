<script lang="ts">
  import GreetingDutch from './components/GreetingDutch';
  import GreetingEnglish from './components/GreetingEnglish';
  import GreetingSpanish from './components/GreetingSpanish';

  const languages = [
    { name: 'dutch', component: GreetingDutch },
    { name: 'english', component: GreetingEnglish },
    { name: 'spanish', component: GreetingSpanish }
  ];

  let selectedLanguage = null;
</script>

{#each languages as language}
  <label>
    <input bind:group={selectedLanguage} type="radio" value={language} />
    {language.name}
  </label>
{/each}

<div id="result">
  <!-- If this is falsy, no component is shown -->
  <svelte:component
    this={selectedLanguage ? selectedLanguage.component : null}
  />
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  #result {
    background: bisque;
  }
</style>
