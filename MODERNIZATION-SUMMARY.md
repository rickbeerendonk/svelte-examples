# Svelte 5 Modernization Summary

## Overview

This repository has been modernized to use Svelte 5 with runes. The update includes both new examples showcasing runes and updates to existing examples.

## What Was Updated

### 1. Dependencies

- **Root `package.json`**: Updated Svelte from `^4.2.11` to `^5.0.0`
- Updated `@sveltejs/vite-plugin-svelte` from `^3.0.2` to `^4.0.0`
- Updated `eslint-plugin-svelte` to `2.45.0`
- Updated `prettier-plugin-svelte` to `3.2.8`
- Updated `svelte-check` from `^3.6.6` to `^4.0.0`

### 2. New Runes Examples Section

Created a new `05a - Runes (Svelte 5)` directory with examples for:

#### 1. `$state` - Basics

- Shows how to use `$state()` for reactive state
- Replaces simple `let` declarations

#### 2. `$derived` - Computed Values

- Demonstrates `$derived()` for computed/derived values
- Replaces `$:` reactive declarations

#### 3. `$effect` - Side Effects

- Shows how to use `$effect()` for side effects
- Includes cleanup functions
- Replaces lifecycle hooks like `onMount`, `onDestroy`, etc.

#### 4. `$props` - Component Props

- Demonstrates the new `$props()` rune
- Replaces `export let` syntax

### 3. Updated Existing Examples

#### Reactivity (06 - Reactivity)

- **1. Assignements**: Updated to use `$state()` and `onclick` handler
- **2. Declarations**: Updated to use `$state()` and `$derived()`

#### Component Interaction (08 - Component Interaction)

- **2. Properties/a. Basics**:
  - Updated to use `$props()`
  - Updated `main.js` to use `mount()` instead of `new App()`
- **3. Events/a. Without Data**:
  - Replaced `createEventDispatcher` with callback props
  - Updated parent to pass callback as prop
  - Updated to use `$state()` for reactive state

#### Component Lifecycle (10 - Component Lifecycle)

- **a. Basics**:
  - Replaced `onMount`, `beforeUpdate`, `afterUpdate`, `onDestroy` with `$effect()`
  - Updated to use `$props()` for component props
  - Updated to use `$state()` for reactive state
  - Demonstrated `$effect.pre()` for pre-update effects

### 4. Documentation

- **SVELTE5-MIGRATION.md**: Comprehensive migration guide covering:
  - All rune types and their usage
  - Side-by-side comparisons of Svelte 4 vs Svelte 5
  - Migration strategy
  - Common pitfalls
  - Benefits of runes
- **Updated readme.md**: Added Svelte 5 announcement and link to migration guide

- **05a - Runes (Svelte 5)/readme.md**: Overview of runes with quick reference table

## Key Pattern Changes

| Svelte 4                    | Svelte 5                                |
| --------------------------- | --------------------------------------- |
| `let count = 0`             | `let count = $state(0)`                 |
| `$: doubled = count * 2`    | `let doubled = $derived(count * 2)`     |
| `$: { console.log(count) }` | `$effect(() => { console.log(count) })` |
| `export let name`           | `let { name } = $props()`               |
| `on:click={handler}`        | `onclick={handler}`                     |
| `new App({...})`            | `mount(App, {...})`                     |
| `createEventDispatcher()`   | Callback props                          |
| `onMount/onDestroy`         | `$effect(() => { ... return cleanup })` |

## What Still Needs to Be Done

While the core examples have been updated, there are many more examples in the repository that should be updated:

1. **More Reactivity Examples** (06 - Reactivity):
   - 3. Statements (Single, Multiple, Conditional)
   - 4. Arrays (various sub-examples)
   - 5. Objects (various sub-examples)

2. **More Component Interaction Examples** (08 - Component Interaction):
   - Other property examples (Typed Values, Complex Values, Default Values, Spread, etc.)
   - Other event examples (With Data, Event Object, Forwarding, etc.)
   - Binding examples

3. **Other Lifecycle Examples** (10 - Component Lifecycle):
   - b. DOM access

4. **Stores** (11 - Stores):
   - Update subscription examples
   - Consider showing new patterns with runes

5. **Update TypeScript Examples**:
   - All the `ts/` directories should be updated similarly

6. **Update Individual package.json Files**:
   - Many examples have their own `package.json` that still reference Svelte 4

7. **Event Modifiers** (09 - Event Modifiers):
   - Update from `on:click` to `onclick` pattern

## Installation Instructions

To use these updated examples:

1. **Install dependencies in root:**

   ```bash
   npm install
   ```

2. **For individual examples, navigate to the example directory and run:**

   ```bash
   cd "05a - Runes (Svelte 5)/1. \$state - Basics/js"
   npm install
   npm run dev
   ```

3. **Note**: The lint errors shown during file creation are expected until dependencies are installed in each example directory.

## Testing Recommendations

1. Test each updated example by running `npm install` and `npm run dev` in the example directory
2. Verify that runes work as expected (state updates, derived values compute, effects run)
3. Check browser console for any errors or warnings
4. Test in both development and production builds

## Notes on Backward Compatibility

- Svelte 5 maintains backward compatibility with Svelte 4 syntax
- However, you cannot mix runes and legacy syntax in the same component
- The updated examples use runes exclusively for clarity
- Some examples may retain Svelte 4 patterns to demonstrate both approaches

## Resources

- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)
- [Svelte 5 Migration Guide (Official)](https://svelte.dev/docs/svelte/v5-migration-guide)
- [Runes RFC](https://github.com/sveltejs/rfcs/blob/master/text/0000-runes.md)

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
