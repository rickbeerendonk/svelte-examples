<script>
  import Container from './Container';

  let source = 'App';
</script>

<Container>
  <span slot="first">
    <em>First: {source}</em>
  </span>

  <!-- Declare a let to use Slot Prop "source" -->
  <span slot="second" let:source>
    <b>Second: {source}</b>
  </span>
</Container>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
