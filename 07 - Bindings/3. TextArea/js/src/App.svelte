<script>
  let text = `HTML doesn't support multiple lines in attributes.
Therefor place content between opening and closing tag.
In JS you can add multiline strings in attributes.
So in Svelte use bind:value={} instead.`;
</script>

<label>
  Without binding:
  <br />
  <!-- prettier-ignore-start -->
  <textarea>
    HTML doesn't support multiple lines in attributes. Therefor place content
    between opening and closing tag. In JS you can add multiline strings in
    attributes. So in Svelte use bind:value={'{'}} instead.
  </textarea>
  <!-- prettier-ignore-end -->
</label>

<br />

<label> With binding: <br /> <textarea bind:value={text} /> </label>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<style>
  textarea {
    height: 4rem;
    width: 25rem;
  }
</style>
