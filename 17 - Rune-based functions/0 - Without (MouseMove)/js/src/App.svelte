<!-- Copyright © 2026 Rick Beerendonk -->

<script>
  import Greeting from './Greeting.svelte';

  let mousePosition = $state({ x: undefined, y: undefined });

  $effect(() => {
    function handleMouseMove(e) {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<Greeting name={'(x:' + mousePosition.x + ', y: ' + mousePosition.y + ')'} />
