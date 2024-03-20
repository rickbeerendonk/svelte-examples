<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  export let data;
</script>

<h2>Home</h2>

<ul>
  {#each data.persons as person}
    <li><a href="person\{person.id}">{person.name}</a></li>
  {/each}
</ul>
