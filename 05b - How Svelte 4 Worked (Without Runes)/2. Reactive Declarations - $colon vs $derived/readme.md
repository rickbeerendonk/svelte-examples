# Reactive Declarations: `$:` (v4) vs `$derived()` (v5)

This example shows how computed/derived values worked in Svelte 4 using `$:` labels compared to Svelte 5's `$derived()`.

## Svelte 4 Approach

In Svelte 4, you used the `$:` label to create reactive declarations (computed values):

```svelte
<script>
  let count = 0;
  $: doubled = count * 2;
  $: quadrupled = doubled * 2;
</script>
```

The `$:` syntax comes from JavaScript labels, which Svelte repurposed for reactivity.

### How It Worked

The compiler would:

1. Detect `$:` labels
2. Analyze dependencies (variables used on the right side)
3. Re-run the statement whenever dependencies changed
4. Update the DOM if needed

### The Problem

- **Confusing syntax**: Labels are rarely used in JavaScript
- **Order matters**: Had to be careful about declaration order
- **Hard to debug**: Stack traces showed label syntax
- **Limited tooling**: TypeScript struggled with this pattern

## Svelte 5 Approach

In Svelte 5, you use `$derived()` for computed values:

```svelte
<script>
  let count = $state(0);
  let doubled = $derived(count * 2);
  let quadrupled = $derived(doubled * 2);
</script>
```

### Benefits

1. **Clearer intent**: Obviously a derived value
2. **Better types**: TypeScript knows it's a getter
3. **No label confusion**: Uses familiar function syntax
4. **Same performance**: Just as efficient as `$:`

For complex computations, use `$derived.by()`:

```svelte
<script>
  let numbers = $state([1, 2, 3, 4, 5]);
  let stats = $derived.by(() => {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    const max = Math.max(...numbers);
    return { sum, avg, max };
  });
</script>
```

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2025 Rick Beerendonk -->
