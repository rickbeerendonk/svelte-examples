# Runes (Svelte 5)

Svelte 5 introduces **runes** - a new way to declare reactive state, derived values, and side effects. Runes are compiler instructions that provide more explicit and powerful reactivity compared to Svelte 4.

## Key Runes

- **`$state`** - Declares reactive state
- **`$derived`** - Declares derived (computed) values
- **`$effect`** - Declares side effects that run when dependencies change
- **`$props`** - Declares component props
- **`$bindable`** - Makes props bindable (two-way binding)
- **`$inspect`** - Debug helper that logs values when they change

## Why Runes?

1. **More explicit** - Clearer intent in code
2. **Better TypeScript support** - Easier to type
3. **More powerful** - Better control over reactivity
4. **Consistent** - Works the same everywhere (components, modules, etc.)
5. **Backward compatible** - Old syntax still works in Svelte 5

## Migration from Svelte 4

| Svelte 4                       | Svelte 5 Runes                           |
| ------------------------------ | ---------------------------------------- |
| `let count = 0`                | `let count = $state(0)`                  |
| `$: doubled = count * 2`       | `let doubled = $derived(count * 2)`      |
| `$: { console.log(count) }`    | `$effect(() => { console.log(count) })`  |
| `export let name`              | `let { name } = $props()`                |
| `export let value` (bindable)  | `let { value = $bindable() } = $props()` |
| `onMount`, `afterUpdate`, etc. | `$effect(() => { ... })`                 |

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
