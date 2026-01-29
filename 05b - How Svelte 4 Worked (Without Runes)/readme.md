# How Svelte 4 Worked Without Runes

This section explains how reactivity, props, events, and lifecycle worked in **Svelte 4** before runes were introduced in Svelte 5.

## Why This Section Exists

Runes are the modern way to write Svelte code (Svelte 5+), but you may:

- Encounter legacy Svelte 4 code
- Need to migrate existing applications
- Want to understand the evolution of Svelte's reactivity system

**Important**: Svelte 5 still supports the old syntax for backward compatibility, but you should use runes for new code.

## Overview of Differences

| Feature             | Svelte 4 (Without Runes)     | Svelte 5 (With Runes)     |
| ------------------- | ---------------------------- | ------------------------- |
| **Reactive State**  | `let` (magic)                | `$state()` (explicit)     |
| **Computed Values** | `$: value = ...`             | `$derived(...)`           |
| **Side Effects**    | `$: { ... }`                 | `$effect(() => { ... })`  |
| **Props**           | `export let prop`            | `let { prop } = $props()` |
| **Events**          | `createEventDispatcher()`    | Callback props            |
| **Event Handlers**  | `on:click={...}`             | `onclick={...}`           |
| **Lifecycle**       | `onMount`, `onDestroy`, etc. | `$effect()`               |
| **Instantiation**   | `new App({...})`             | `mount(App, {...})`       |

## Examples

Each subdirectory shows how a specific feature worked in Svelte 4 compared to Svelte 5:

1. **Reactive State** - How `let` was automatically reactive
2. **Reactive Declarations** - How `$:` worked for computed values
3. **Reactive Statements** - How `$:` blocks worked for side effects
4. **Component Props** - How `export let` worked
5. **Component Events** - How `createEventDispatcher` worked
6. **Event Handlers** - How `on:` directives worked
7. **Lifecycle Hooks** - How `onMount`, `onDestroy`, etc. worked
8. **Component Instantiation** - How `new App()` worked

## Why Runes Are Better

### 1. **More Explicit**

Svelte 4's magic was confusing:

```svelte
<!-- Svelte 4 - Is 'count' reactive? Hard to tell! -->
<script>
  let count = 0; // Reactive (magic!)
  let user = fetchUser(); // Not reactive (depends on usage)
</script>
```

```svelte
<!-- Svelte 5 - Clear and explicit -->
<script>
  let count = $state(0); // Clearly reactive
  let user = fetchUser(); // Clearly not reactive
</script>
```

### 2. **Better TypeScript Support**

Runes are easier to type than magic `let` variables and `$:` labels.

### 3. **Works Everywhere**

Runes work in `.svelte.js` files, not just components:

```javascript
// user.svelte.js
export function createUser() {
  let name = $state('');
  let email = $state('');

  return {
    get name() {
      return name;
    },
    set name(v) {
      name = v;
    },
    get email() {
      return email;
    },
    set email(v) {
      email = v;
    }
  };
}
```

### 4. **More Powerful**

- Fine-grained reactivity control
- Better performance
- More predictable behavior
- Easier to debug

### 5. **Consistent Patterns**

Everything uses functions (`$state()`, `$derived()`, `$effect()`), not mixed syntax.

## When You Might Still See Svelte 4 Syntax

- Legacy codebases
- External libraries not yet updated
- Documentation and tutorials written before Svelte 5
- Gradual migrations (Svelte 5 supports both!)

## Migration Notes

You **cannot mix** runes and old syntax in the same component's `<script>` block:

```svelte
<!-- ❌ WRONG - Cannot mix! -->
<script>
  export let name; // Svelte 4
  let count = $state(0); // Svelte 5
</script>
```

```svelte
<!-- ✅ CORRECT - All Svelte 5 -->
<script>
  let { name } = $props();
  let count = $state(0);
</script>
```

```svelte
<!-- ✅ ALSO CORRECT - All Svelte 4 -->
<script>
  export let name;
  let count = 0;
</script>
```

## Resources

- [Svelte 5 Migration Guide](../SVELTE5-MIGRATION.md)
- [Runes Quick Reference](../RUNES-QUICK-REFERENCE.md)
- [Official Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
