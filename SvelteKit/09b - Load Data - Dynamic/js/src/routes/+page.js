// European Union Public License version 1.2
// Copyright © 2024 Rick Beerendonk

// This load function is called for the main page,
// and it fetches a list of posts from an external API.
// The fetched data is returned as part of the load function's return value,
// which makes it available to the page component as `data.posts`.
export async function load({ fetch }) {
  return {
    posts: await fetch('https://jsonplaceholder.typicode.com/posts').then(r =>
      r.json()
    )
  };
}
