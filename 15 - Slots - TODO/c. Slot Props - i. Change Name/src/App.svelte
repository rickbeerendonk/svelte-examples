<script>
  import Container from './Container';

  let source = 'App';
</script>

<Container>
  <span slot="first">
    <em>First: {source}</em>
  </span>

  <!-- 
    Declare a let to use Slot Prop "source".
    Rename Slot Prop so we don't have two different "source" values.
  -->
  <span slot="second" let:source={containerSource}>
    <b>Second: {containerSource}</b>
  </span>
</Container>

<!-- European Union Public License version 1.2 -->
<!-- Copyright © 2020 Rick Beerendonk -->
