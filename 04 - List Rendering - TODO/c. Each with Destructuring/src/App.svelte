<script>
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
