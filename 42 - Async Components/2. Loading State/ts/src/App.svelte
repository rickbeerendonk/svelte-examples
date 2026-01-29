<!-- eslint-disable svelte/infinite-reactive-loop, svelte/require-each-key, no-unused-vars -->
<!-- Infinite reactive loop, missing keys, and unused err parameter are intentional for educational purposes -->
<script lang="ts">
  import Error from './components/Error';
  import Loading from './components/Loading';

  const languages = ['Dutch', 'English', 'Spanish', 'Unknown'];

  let selectedLanguage = null;
  let selectedComponent = null;

  $: {
    if (selectedLanguage) {
      selectedComponent = Loading;
      import(`./components/Greeting${selectedLanguage}.svelte`)
        .then(module => {
          selectedComponent = module.default;
        })
        .catch(err => {
          selectedComponent = Error;
        });
    }
  }
</script>

{#each languages as language}
  <label>
    <input bind:group={selectedLanguage} type="radio" value={language} />
    {language}
  </label>
{/each}

<div id="result">
  <!-- If this is falsy, no component is shown -->
  <svelte:component this={selectedComponent} />
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  #result {
    background: bisque;
  }
</style>
