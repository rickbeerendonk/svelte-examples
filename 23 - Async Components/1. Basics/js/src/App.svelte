<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<!-- eslint-disable svelte/infinite-reactive-loop, svelte/require-each-key -->
<!-- Infinite reactive loop and missing keys are intentional for educational purposes -->
<script>
  const languages = ['Dutch', 'English', 'Spanish'];

  let selectedLanguage = $state(null);
  let SelectedComponent = $state(null);

  $effect(() => {
    if (selectedLanguage) {
      import(`./components/Greeting${selectedLanguage}.svelte`).then(module => {
        SelectedComponent = module.default;
      });
    }
  });
</script>

{#each languages as language}
  <label>
    <input bind:group={selectedLanguage} type="radio" value={language} />
    {language}
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
