# Svelte 5 Migration Guide - Runes

This guide explains how to migrate from Svelte 4 to Svelte 5 using runes.

## What are Runes?

Runes are Svelte 5's new way to declare reactive state and behavior. They're compiler instructions (starting with `$`) that provide more explicit and powerful reactivity.

## Key Changes

### 1. Reactive State: `let` → `$state()`

**Svelte 4:**

```svelte
<script>
  let count = 0;
</script>
```

**Svelte 5:**

```svelte
<script>
  let count = $state(0);
</script>
```

### 2. Reactive Declarations: `$:` → `$derived()`

**Svelte 4:**

```svelte
<script>
  let count = 0;
  $: doubled = count * 2;
</script>
```

**Svelte 5:**

```svelte
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>
```

### 3. Reactive Statements: `$: { }` → `$effect()`

**Svelte 4:**

```svelte
<script>
  let count = 0;
  $: {
    console.log('Count:', count);
  }
</script>
```

**Svelte 5:**

```svelte
<script>
  let count = $state(0);
  $effect(() => {
    console.log('Count:', count);
  });
</script>
```

### 4. Component Props: `export let` → `$props()`

**Svelte 4:**

```svelte
<script>
  export let name;
  export let age = 25; // with default
</script>
```

**Svelte 5:**

```svelte
<script>
  let { name, age = 25 } = $props();
</script>
```

### 5. Events: `createEventDispatcher` → Callback Props

**Svelte 4 (Parent):**

```svelte
<script>
  import Child from './Child.svelte';

  function handleClick() {
    console.log('Clicked!');
  }
</script>

<Child on:click={handleClick} />
```

**Svelte 4 (Child):**

```svelte
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<button on:click={handleClick}>Click me</button>
```

**Svelte 5 (Parent):**

```svelte
<script>
  import Child from './Child.svelte';

  function handleClick() {
    console.log('Clicked!');
  }
</script>

<Child onclick={handleClick} />
```

**Svelte 5 (Child):**

```svelte
<script>
  let { onclick } = $props();
</script>

<button onclick={() => onclick?.()}>Click me</button>
```

### 6. Lifecycle Hooks → `$effect()`

**Svelte 4:**

```svelte
<script>
  import { onMount, onDestroy, afterUpdate } from 'svelte';

  onMount(() => {
    console.log('Mounted');
    return () => console.log('Destroyed');
  });

  afterUpdate(() => {
    console.log('Updated');
  });
</script>
```

**Svelte 5:**

```svelte
<script>
  // Runs on mount and after each update
  $effect(() => {
    console.log('Mounted/Updated');
    return () => console.log('Cleanup');
  });

  // Runs before updates
  $effect.pre(() => {
    console.log('Before update');
  });
</script>
```

### 7. Event Handlers: `on:` → Direct Attributes

**Svelte 4:**

```svelte
<button on:click={handleClick}>Click</button>
<input on:input={handleInput} />
```

**Svelte 5:**

```svelte
<button onclick={handleClick}>Click</button>
<input oninput={handleInput} />
```

### 8. Component Instantiation: `new` → `mount()`

**Svelte 4:**

```javascript
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: { name: 'World' }
});
```

**Svelte 5:**

```javascript
import { mount } from 'svelte';
import App from './App.svelte';

const app = mount(App, {
  target: document.body,
  props: { name: 'World' }
});
```

### 9. Two-way Bindings: `bind:` → `$bindable()`

**Svelte 4 (Child):**

```svelte
<script>
  export let value;
</script>
```

**Svelte 5 (Child):**

```svelte
<script>
  let { value = $bindable() } = $props();
</script>
```

Usage (both versions):

```svelte
<Child bind:value />
```

## Additional Runes

### `$inspect()`

Debug helper that logs values when they change:

```svelte
<script>
  let count = $state(0);
  $inspect(count); // Logs to console when count changes
</script>
```

### `$state.frozen()`

For immutable state:

```svelte
<script>
  let config = $state.frozen({ theme: 'dark' });
  // config cannot be mutated
</script>
```

### `$derived.by()`

For complex derived computations:

```svelte
<script>
  let numbers = $state([1, 2, 3, 4, 5]);
  let sum = $derived.by(() => {
    let total = 0;
    for (const n of numbers) {
      total += n;
    }
    return total;
  });
</script>
```

## Migration Strategy

1. **Update dependencies** to Svelte 5
2. **Start with new code** - Use runes in new components
3. **Migrate incrementally** - Update existing components one at a time
4. **Test thoroughly** - Runes change reactivity behavior slightly
5. **Update event handlers** - Change `on:` to direct attributes
6. **Replace lifecycle hooks** - Convert to `$effect()`
7. **Update props** - Change `export let` to `$props()`
8. **Replace event dispatchers** - Use callback props

## Benefits of Runes

1. **More explicit** - Clearer where reactivity happens
2. **Better TypeScript support** - Easier to type
3. **More powerful** - Fine-grained control
4. **Consistent** - Works the same in components and modules
5. **Better performance** - More optimizable by compiler
6. **Simpler mental model** - Less "magic"

## Backward Compatibility

Svelte 5 still supports Svelte 4 syntax! You can:

- Use `let` for non-reactive variables
- Use `export let` for props (still works)
- Use `$:` for reactive declarations (still works)
- Use lifecycle hooks (still work)

However, you cannot mix runes and legacy syntax in the same component's `<script>` block.

## Common Pitfalls

1. **Mixing syntaxes** - Don't use `$state` and `export let` in same component
2. **Forgetting `$state`** - Variables won't be reactive without it
3. **Effect dependencies** - `$effect` tracks all state accessed inside it
4. **Event names** - Use lowercase: `onclick` not `onClick`

## Resources

- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)
- [Runes RFC](https://github.com/sveltejs/rfcs/blob/master/text/0000-runes.md)
- [Migration Guide](https://svelte.dev/docs/svelte/v5-migration-guide)

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
