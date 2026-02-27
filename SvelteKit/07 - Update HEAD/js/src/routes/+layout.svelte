<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  import { resolve } from '$app/paths';

  let { children } = $props();
</script>

<header>
  <h1>App</h1>
  <nav>
    <a href={resolve('/')}>Home</a>
    <a href={resolve('/page1')}>Page 1</a>
    <a href={resolve('/page2')}>Page 2</a>
  </nav>
</header>

<main>
  {@render children()}
</main>

<footer>My copyright</footer>

<style>
  header,
  footer {
    background: lightblue;
    padding: 0.5rem;
  }

  main {
    padding: 0.5rem;
  }

  header h1,
  header nav {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  header nav > a {
    margin-right: 0.5rem;
  }
</style>
