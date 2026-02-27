<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  import { resolve } from '$app/paths';

  let { data } = $props();
</script>

<h2>Home</h2>

<ul>
  {#each data.posts as post (post.id)}
    <li><a href={resolve(`/post/${post.id}`)}>{post.title}</a></li>
  {/each}
</ul>
