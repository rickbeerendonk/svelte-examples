<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  import { resolve } from '$app/paths';

  let { data } = $props();
</script>

<h2>Home</h2>

<ul>
  {#each data.persons as person (person.id)}
    <li><a href={resolve(`/person/${person.id}`)}>{person.name}</a></li>
  {/each}
</ul>
