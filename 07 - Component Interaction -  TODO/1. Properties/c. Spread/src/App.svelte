<script>
  import Greeting from './Greeting';

  const props = {
    greet: 'Hello',
    name: 'Svelte'
  };
</script>

<Greeting {...props} />
