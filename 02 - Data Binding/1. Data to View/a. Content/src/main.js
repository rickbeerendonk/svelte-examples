import App from './App.html';

const app = new App({
  target: document.body,
  data: {
    name: 'Svelte'
  }
});

window.app = app;

export default app;
