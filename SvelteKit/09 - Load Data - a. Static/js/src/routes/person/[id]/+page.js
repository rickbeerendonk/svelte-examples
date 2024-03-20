import { persons } from '$lib/persons.js';

export function load({ params }) {
  return {
    person: persons.find(person => person.id === parseInt(params.id))
  };
}
