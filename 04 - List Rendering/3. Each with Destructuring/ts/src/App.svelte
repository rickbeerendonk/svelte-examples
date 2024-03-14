<script lang="ts">
  const persons = [
    { name: 'Alexandra', age: 35 },
    { name: 'Benjamin', age: 21 },
    { name: 'Charlotte', age: 57 }
  ];
</script>

<ul>
  {#each persons as { name, age }}
    <li>{name} is {age} years old</li>
  {/each}
</ul>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
