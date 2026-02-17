<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->

<script lang="ts">
  let text = $state(`HTML doesn't support multiple lines in attributes.
Therefor place content between opening and closing tag.
In JS you can add multiline strings in attributes.
So in Svelte use bind:value={} instead.`);
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

<label> With binding: <br /> <textarea bind:value={text}></textarea> </label>

<style>
  textarea {
    height: 4rem;
    width: 40rem;
  }
</style>
