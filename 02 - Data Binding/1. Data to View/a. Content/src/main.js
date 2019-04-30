import App from './App';

const app = new App({
  target: document.body,
  props: {
    name: 'Svelte'
  }
});

window.app = app;

export default app;
