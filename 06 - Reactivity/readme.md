<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->

# Reactivity

Svelte uses **runes** to declare reactive state, derived values, and side effects. Runes are compiler instructions that provide explicit and powerful reactivity.

## Key Runes

- **`$state`** - Declares reactive state (with deep reactivity for arrays and objects)
- **`$derived`** - Declares derived (computed) values
- **`$effect`** - Declares side effects that run when dependencies change
- **`$props`** - Declares component props
- **`$bindable`** - Makes props bindable (two-way binding)
- **`$inspect`** - Debug helper that logs values when they change

## Benefits of Runes

1. **Explicit** - Clear intent in code
2. **TypeScript friendly** - Easy to type
3. **Powerful** - Fine control over reactivity
4. **Consistent** - Works the same everywhere (components, modules, etc.)
5. **Deep reactivity** - Arrays and objects are reactive by default
