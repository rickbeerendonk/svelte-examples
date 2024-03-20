<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2024 Rick Beerendonk          -->

<script>
  export let data;
</script>

<h2>Home</h2>

<ul>
  {#each data.posts as post}
    <li><a href="post\{post.id}">{post.title}</a></li>
  {/each}
</ul>
