<script>
  import Dialog from '$lib/components/common/Dialog.svelte'
  import SearchIcon from '$lib/components/icons/SearchIcon.svelte'
  import NewProject from '$lib/components/NewProject.svelte'

  let dialog
  let search = ''
  // import { Button } from '@codepiercer/svelte-tailwind'
</script>

<div class="absolute top-0 w-full max-w-md rounded-lg bg-white md:left-2 md:top-2 ">
  <div class="flex rounded-md shadow-sm">
    <div class="relative flex flex-grow items-stretch focus-within:z-10">
      <SearchIcon />
      <input
        type="text"
        readonly
        on:click={dialog.show}
        bind:value={search}
        class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
        placeholder="Search projects ..."
      />
    </div>
    <NewProject />
  </div>
</div>

<Dialog bind:dialog closeOnOverlayClick>
  <div slot="content">
    <SearchIcon />
    <input
      type="text"
      bind:value={search}
      class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
      placeholder="Search projects ..."
    />
  </div>
</Dialog>
