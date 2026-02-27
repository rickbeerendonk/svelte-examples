import { persons } from '$lib/persons.js';

// This load function is called for the main page,
// and it simply returns the list of persons.
export function load() {
  return {
    persons
  };
}
