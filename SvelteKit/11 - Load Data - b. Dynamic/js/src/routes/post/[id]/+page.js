// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

export async function load({ fetch, params }) {
  return {
    post: await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    ).then(r => r.json())
  };
}
