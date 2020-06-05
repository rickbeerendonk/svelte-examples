<script>
  const languages = ['Dutch', 'English', 'Spanish'];

  let selectedLanguage = null;
  let selectedComponent = null;

  $: {
    if (selectedLanguage) {
      import(`./components/Greeting${selectedLanguage}.svelte`).then(
        (module) => {
          selectedComponent = module.default;
        }
      );
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
    {language}
  </label>
{/each}

<div id="result">
  <!-- If this is falsy, no component is shown -->
  <svelte:component this={selectedComponent} />
</div>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
