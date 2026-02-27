import { persons } from '$lib/persons.js';

// This load function is called for each person page,
// and it receives the params object as an argument.
// We can use the id parameter to find the corresponding person
// and return it as part of the load function's return value.
export function load({ params }) {
  return {
    person: persons.find(person => person.id === parseInt(params.id))
  };
}
