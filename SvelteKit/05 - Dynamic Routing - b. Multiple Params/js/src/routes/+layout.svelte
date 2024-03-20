<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<header>
  <h1>App</h1>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<main>
  <slot />
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
