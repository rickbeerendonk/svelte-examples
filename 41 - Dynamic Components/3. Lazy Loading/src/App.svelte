<script>
  const GreetingDutch = () => import('./components/GreetingDutch');
  const GreetingEnglish = () => import('./components/GreetingEnglish');
  const GreetingSpanish = () => import('./components/GreetingSpanish');

  const languages = [
    { name: 'dutch', component: GreetingDutch },
    { name: 'english', component: GreetingEnglish },
    { name: 'spanish', component: GreetingSpanish }
  ];

  let selectedLanguage = null;
  let selectedComponent = null;

  $: {
    if (selectedLanguage) {
      selectedLanguage.component().then(module => {
        selectedComponent = module.default;
      });
    }
  }
</script>

<style>
  #result {
    background: bisque;
  }
</style>

{#each languages as language}
  <label>
    <input bind:group={selectedLanguage} type="radio" value={language} />
    {language.name}
  </label>
{/each}

<div id="result">
  <!-- If this is falsy, no component is shown -->
  <svelte:component this={selectedComponent} />
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
