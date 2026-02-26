<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<!-- eslint-disable svelte/infinite-reactive-loop, svelte/require-each-key, no-unused-vars -->
<!-- Infinite reactive loop, missing keys, and unused err parameter are intentional for educational purposes -->
<script lang="ts">
  import { onMount } from 'svelte';

  import Error from './components/Error.svelte';
  import Loading from './components/Loading.svelte';

  const languages = ['Dutch', 'English', 'Spanish', 'Unknown'];

  let selectedLanguage = $state<string | null>(null);
  let SelectedComponent = $state<typeof Loading | typeof Error | null>(null);

  $effect(() => {
    if (selectedLanguage) {
      SelectedComponent = Loading;
      import(`./components/Greeting${selectedLanguage}.svelte`)
        .then(module => {
          SelectedComponent = module.default;
        })
        .catch(err => {
          SelectedComponent = Error;
        });
    }
  });

  onMount(async () => {
    import(`./components/GreetingDutch.svelte`);
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
