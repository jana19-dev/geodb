<script>
  import Dialog from '$lib/components/common/Dialog.svelte'
  import ButtonLoadingIcon from '$lib/components/icons/ButtonLoadingIcon.svelte'
  import PlusIcon from '$lib/components/icons/PlusIcon.svelte'

  import { Geocoder } from '@beyonk/svelte-mapbox'
  import { PUBLIC_MAPBOX_KEY } from '$env/static/public'

  let dialog
  let isLoading = false

  let name = ''
  let description = ''
  let lat // default to Washington DC
  let lng // default to Washington DC

  const onLocationResult = (e) => {
    const { center } = e.detail.result
    lat = center[1]
    lng = center[0]
  }

  const onLocationClear = () => {
    lat = null
    lng = null
  }

  const handleSubmit = () => {
    dialog.hide()
  }

  const onClose = () => {
    name = ''
    dialog.hide()
  }
</script>

<button
  on:click={dialog.show}
  type="button"
  class="my-1 mr-1 inline-flex items-center rounded-md border border-transparent bg-blue-600 pr-3 pl-2 text-xs text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  <PlusIcon />
  <span class="ml-0.5">New</span>
</button>

<Dialog bind:dialog>
  <h2 slot="header" class="text-xl font-semibold text-gray-900">Create a new Project</h2>

  <form
    slot="content"
    id="NewProject"
    on:submit|preventDefault={handleSubmit}
    class="space-y-6 px-5"
  >
    <div>
      <label for="name" class="required block text-sm font-medium text-gray-700">Name</label>
      <div class="mt-1">
        <input
          required
          type="text"
          bind:value={name}
          name="name"
          id="name"
          class="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="a short name for this project"
        />
      </div>
    </div>
    <div>
      <label for="description" class="required block text-sm font-medium text-gray-700"
        >Description</label
      >
      <div class="mt-1">
        <textarea
          required
          bind:value={description}
          rows="3"
          name="description"
          description="description"
          id="description"
          class="block  w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="a brief description about this project"
        />
      </div>
    </div>
    <div>
      <label for="name" class="required block text-sm font-medium text-gray-700">Location</label>
      <div class="mt-1">
        <Geocoder
          accessToken={PUBLIC_MAPBOX_KEY}
          on:result={onLocationResult}
          on:clear={onLocationClear}
          placeholder="search for a location ..."
        />
        <div class="mt-4 flex justify-between gap-2">
          <div class="w-full">
            <label for="lat" class="required block text-sm font-medium text-gray-700"
              >Latitude</label
            >
            <input
              required
              type="number"
              bind:value={lat}
              name="lat"
              id="lat"
              class="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="lat"
            />
          </div>
          <div class="w-full">
            <label for="lng" class="required block text-sm font-medium text-gray-700"
              >Longitude</label
            >
            <input
              required
              type="number"
              bind:value={lng}
              name="lng"
              id="lng"
              class="block w-full rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="lng"
            />
          </div>
        </div>
      </div>
    </div>
  </form>

  <div slot="footer" class="flex justify-end gap-4">
    <button
      on:click={onClose}
      disabled={isLoading}
      class="inline-flex  items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
      >Cancel</button
    >

    <button
      disabled={isLoading}
      type="submit"
      form="NewProject"
      class="flex  justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
    >
      {#if isLoading}
        <ButtonLoadingIcon />
      {/if}
      Create
    </button>
  </div>
</Dialog>
