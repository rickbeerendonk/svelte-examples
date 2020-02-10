# Async Rendering

## Basics

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Svelte');
    // or
    reject(new Error('Error occurred.'));
  }, 1000);
});
```

```html
{#await promise}
<p>Loading...</p>
{:then name}
<h1>Hello {name}!</h1>
{:catch error}
<p style="color: red">
  {error.message}
</p>
{/await}
```

## No Error

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Svelte');
  }, 1000);
});
```

```html
{#await promise}
<p>Loading...</p>
{:then name}
<h1>Hello {name}!</h1>
{/await}
```

## No Loading

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Svelte');
  }, 1000);
});
```

No UI while we wait for the promise to resolve:

```html
{#await promise then name}
<h1>Hello {name}!</h1>
{/await}
```

## Licence

European Union Public Licence version 1.2

## Copyright

Copyright © 2019-2020 Rick Beerendonk
