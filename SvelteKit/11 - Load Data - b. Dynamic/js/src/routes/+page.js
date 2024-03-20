// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

export async function load({ fetch }) {
  return {
    posts: await fetch('https://jsonplaceholder.typicode.com/posts').then(r =>
      r.json()
    )
  };
}
