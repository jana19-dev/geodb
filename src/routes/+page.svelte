<script>
  import DotPattern from '$lib/components/common/DotPattern.svelte'
  import { onMount } from 'svelte'

  let Leaflet
  export let data

  onMount(async () => {
    Leaflet = (await import('$lib/components/Leaflet.svelte')).default
  })
</script>

<DotPattern />

<div class="h-full">
  <svelte:component this={Leaflet} />
</div>
