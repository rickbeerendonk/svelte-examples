<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  let { data } = $props();
</script>

<h2>Home</h2>

<ul>
  <li>Id: {data.person.id}</li>
  <li>Name: {data.person.name}</li>
  <li>Age: {data.person.age}</li>
</ul>
