<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script>
  import GreetingDutch from './components/GreetingDutch.svelte';
  import GreetingEnglish from './components/GreetingEnglish.svelte';
  import GreetingSpanish from './components/GreetingSpanish.svelte';

  const languages = [
    { name: 'dutch', component: GreetingDutch },
    { name: 'english', component: GreetingEnglish },
    { name: 'spanish', component: GreetingSpanish }
  ];

  let selectedLanguage = $state(null);

  let SelectedComponent = $derived(selectedLanguage?.component ?? null);
</script>

{#each languages as language (language.name)}
  <label>
    <input bind:group={selectedLanguage} type="radio" value={language} />
    {language.name}
  </label>
{/each}

<div id="result">
  <!-- If this is falsy, no component is shown -->
  {#if SelectedComponent}
    <SelectedComponent />
  {/if}
</div>

<style>
  #result {
    background: bisque;
  }
</style>
