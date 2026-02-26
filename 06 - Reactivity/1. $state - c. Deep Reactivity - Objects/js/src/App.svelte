<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->

<script>
  // $state provides deep reactivity for objects
  let user = $state({
    name: 'John',
    address: {
      city: 'Amsterdam',
      country: 'Netherlands'
    },
    scores: [10, 20, 30]
  });

  function updateCity() {
    // Deeply nested property changes are reactive
    user.address.city = 'Rotterdam';
  }

  function addScore() {
    // Array methods on nested arrays are also reactive
    user.scores.push(Math.floor(Math.random() * 100));
  }
</script>

<p class="comment">
  Objects with $state have deep reactivity. Changes to nested properties and
  nested arrays all trigger reactive updates automatically.
</p>

<p>Name: {user.name}</p>
<p>City: {user.address.city}</p>
<p>Scores: {user.scores.join(', ')}</p>

<button onclick={updateCity}>Change city</button>
<button onclick={addScore}>Add score</button>

<pre>{JSON.stringify(user, null, 2)}</pre>

<style>
  .comment {
    color: gray;
  }
</style>
