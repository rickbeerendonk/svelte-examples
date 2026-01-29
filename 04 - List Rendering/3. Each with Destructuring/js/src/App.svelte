<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<!-- eslint-disable svelte/require-each-key -->
<!-- No key needed for this basic destructuring educational example -->

<script>
  const persons = [
    { name: 'Alexandra', age: 35 },
    { name: 'Benjamin', age: 21 },
    { name: 'Charlotte', age: 57 }
  ];
</script>

<ul>
  <!-- eslint-disable-next-line svelte/require-each-key -->
  {#each persons as { name, age }}
    <li>{name} is {age} years old</li>
  {/each}
</ul>
