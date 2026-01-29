# Svelte 5 Runes Quick Reference

## Core Runes

### `$state(initial)` - Reactive State

```svelte
<script>
  let count = $state(0);
  let user = $state({ name: 'John', age: 30 });
  let items = $state([1, 2, 3]);
</script>
```

### `$derived(expression)` - Computed Values

```svelte
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);
  let isEven = $derived(count % 2 === 0);
</script>
```

### `$derived.by(fn)` - Complex Computations

```svelte
<script>
  let numbers = $state([1, 2, 3, 4, 5]);
  let stats = $derived.by(() => {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    return { sum, avg };
  });
</script>
```

### `$effect(fn)` - Side Effects

```svelte
<script>
  let count = $state(0);

  // Runs on mount and when count changes
  $effect(() => {
    document.title = `Count: ${count}`;

    // Optional cleanup
    return () => {
      console.log('Cleaning up');
    };
  });
</script>
```

### `$effect.pre(fn)` - Pre-update Effects

```svelte
<script>
  let value = $state(0);

  // Runs before DOM updates
  $effect.pre(() => {
    console.log('About to update:', value);
  });
</script>
```

### `$effect.root(fn)` - Manual Effect Management

```svelte
<script>
  let cleanup = $effect.root(() => {
    $effect(() => {
      // Your effect code
    });

    return () => {
      // Cleanup all effects
    };
  });
</script>
```

### `$props()` - Component Props

```svelte
<script>
  // Basic props
  let { name, age } = $props();

  // With defaults
  let { name = 'Guest', age = 0 } = $props();

  // With rest
  let { name, ...rest } = $props();

  // All props
  let props = $props();
</script>
```

### `$bindable(initial?)` - Bindable Props

```svelte
<!-- Child.svelte -->
<script>
  let { value = $bindable(0) } = $props();
</script>

<!-- Parent.svelte -->
<Child bind:value />
```

### `$inspect(values...)` - Debug Helper

```svelte
<script>
  let count = $state(0);
  let name = $state('John');

  $inspect(count); // Logs when count changes
  $inspect(count, name); // Logs when either changes
  $inspect('Debug:', count, name); // With label
</script>
```

### `$state.frozen(value)` - Immutable State

```svelte
<script>
  let config = $state.frozen({ theme: 'dark', lang: 'en' });
  // Cannot mutate config
  // To update, create new object:
  config = { ...config, theme: 'light' };
</script>
```

### `$state.snapshot(value)` - Non-reactive Snapshot

```svelte
<script>
  let obj = $state({ count: 0 });

  // Get non-reactive copy
  let snapshot = $state.snapshot(obj);
  // snapshot is a plain object, not reactive
</script>
```

## Event Handlers

### Svelte 4 → Svelte 5

```svelte
<!-- Svelte 4 -->
<button on:click={handler}>Click</button>
<input on:input={handler} />
<form on:submit={handler} />

<!-- Svelte 5 -->
<button onclick={handler}>Click</button>
<input oninput={handler} />
<form onsubmit={handler} />
```

## Component Instantiation

### Svelte 4 → Svelte 5

```javascript
// Svelte 4
import App from './App.svelte';
const app = new App({
  target: document.body,
  props: { name: 'World' }
});

// Svelte 5
import { mount } from 'svelte';
import App from './App.svelte';
const app = mount(App, {
  target: document.body,
  props: { name: 'World' }
});
```

## Common Patterns

### Counter

```svelte
<script>
  let count = $state(0);
</script>

<button onclick={() => count++}>
  Count: {count}
</button>
```

### Form Input

```svelte
<script>
  let name = $state('');
  let greeting = $derived(`Hello ${name}!`);
</script>

<input bind:value={name} /><p>{greeting}</p>
```

### Async Data Fetching

```svelte
<script>
  let data = $state(null);
  let loading = $state(true);

  $effect(() => {
    loading = true;
    fetch('/api/data')
      .then(r => r.json())
      .then(d => {
        data = d;
        loading = false;
      });
  });
</script>
```

### Component with Callback

```svelte
<!-- Child.svelte -->
<script>
  let { onclick } = $props();
</script>
<button onclick={() => onclick?.()}>Click me</button>

<!-- Parent.svelte -->
<script>
  function handleClick() {
    console.log('Clicked!');
  }
</script>
<Child {onclick: handleClick} />
```

### Timer with Cleanup

```svelte
<script>
  let count = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      count++;
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<p>Count: {count}</p>
```

### Local Storage Sync

```svelte
<script>
  let theme = $state(localStorage.getItem('theme') || 'light');

  $effect(() => {
    localStorage.setItem('theme', theme);
  });
</script>
```

## Important Notes

1. **Cannot mix syntaxes**: Don't use runes and `export let`/`$:` in same component
2. **Runes at top level**: Must be called at component top level (not in functions/loops)
3. **Effect tracking**: `$effect` automatically tracks all state accessed inside it
4. **Cleanup functions**: Return cleanup from `$effect` to run when effect re-runs or component unmounts
5. **Async effects**: `$effect` cannot be async, but can contain async code
6. **Props are readonly**: Don't mutate props directly (use `$bindable` if needed)

## Migration Checklist

- [ ] Update dependencies to Svelte 5
- [ ] Replace `let` with `$state()` for reactive state
- [ ] Replace `$: value = ...` with `let value = $derived(...)`
- [ ] Replace `$: { ... }` with `$effect(() => { ... })`
- [ ] Replace `export let` with `let { prop } = $props()`
- [ ] Replace `on:event` with `onevent`
- [ ] Replace `createEventDispatcher` with callback props
- [ ] Replace lifecycle hooks with `$effect()`
- [ ] Replace `new App()` with `mount()`
- [ ] Test thoroughly!

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
