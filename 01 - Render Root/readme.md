# Render Root

## Component Definition

A svelte component is a self-contained reusable combination of HTML, CSS and JS code. Components are written in `.svelte` files.

```svelte
<main>
  <h1>Hello Svelte!</h1>
</main>
```

## Root Component Creation

The root component is created and exported from a JavaScript module. The root component will be added to an element in the HTML page. This element is passed during creation of the component using the target property.

```js
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')
});

export default app;
```

## Copyright

Copyright © 2019 Rick Beerendonk
