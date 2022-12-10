<script>
  import DotPattern from '$lib/components/common/DotPattern.svelte'

  export let data
</script>

<DotPattern />

<div class="grid h-full place-items-center">
  <div class="z-10 flex flex-col items-center justify-center gap-4">
    <h1 class="text-5xl font-extrabold leading-none tracking-tight text-white">
      <span class="tracking-wide text-blue-500">GeoDB</span>
    </h1>
    <img src="/favicon.png" alt="logo" class="h-32 w-32 animate-spin-slow" />
    <p class="text-sm font-semibold text-blue-500">Total Projects: {data.projects.length}</p>
  </div>
</div>
