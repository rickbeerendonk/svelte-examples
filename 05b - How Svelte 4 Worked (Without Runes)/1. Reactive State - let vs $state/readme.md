# Reactive State: `let` (v4) vs `$state()` (v5)

This example shows the difference between Svelte 4's magic `let` and Svelte 5's explicit `$state()`.

## Svelte 4 Approach

In Svelte 4, **any** `let` variable that was:

1. Assigned to in the component
2. Referenced in the template

Would automatically become reactive. This was "compiler magic" - the compiler would detect these patterns and make the variable reactive.

```svelte
<script>
  let count = 0; // Automatically reactive!

  function increment() {
    count += 1; // Assignment makes it reactive
  }
</script>

<button on:click={increment}>{count}</button>
```

### The Problem with Magic

This magic reactivity was confusing:

```svelte
<script>
  let a = 0; // Reactive (used in template, assigned to)
  let b = 0; // Not reactive (never used)
  let c = fetchData(); // Not reactive (depends on what happens)

  function update() {
    a += 1; // Triggers re-render
    b += 1; // Does NOT trigger re-render
  }
</script>

<p>{a}</p>
<!-- 'b' is not used in template -->
```

You couldn't tell by looking at the variable declaration whether it was reactive or not.

## Svelte 5 Approach

In Svelte 5, you explicitly mark reactive state with `$state()`:

```svelte
<script>
  let count = $state(0); // Explicitly reactive

  function increment() {
    count += 1;
  }
</script>

<button onclick={increment}>{count}</button>
```

### Benefits

1. **Clear intent** - You know exactly what's reactive
2. **No magic** - Explicit is better than implicit
3. **Better performance** - Compiler can optimize better
4. **Works everywhere** - Not just in components

## See the Example Files

- `svelte4.svelte` - Shows Svelte 4 magic `let` approach (code reference only)
- `svelte5.svelte` - Shows Svelte 5 explicit `$state()` approach (code reference only)

**Note:** These files are for code comparison only. The Svelte 4 syntax no longer works in Svelte 5 by default.

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
