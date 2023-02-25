<script>
  import { Map, Marker } from '@beyonk/svelte-mapbox'
  import { PUBLIC_MAPBOX_KEY } from '$env/static/public'

  import Search from '$lib/components/Search.svelte'

  const mapOptions = {
    center: [-77.0354461669922, 38.895575460651806], // Washington DC
    maxBounds: [
      // Set bounds to Washington DC, Virginia, Maryland
      [-78.0775390625, 37.904],
      [-76.09296875, 39.923]
    ]
  }
  let map

  $: if (map) {
    // detect is mouse context menu
    map.on('contextmenu', onMapRightClick)
    // map.setCenter([-77.0354461669922, 38.895575460651806]) // Washington DC
    // map.setZoom(11)
  }

  // function onPlaceFind(e) {
  //   const { center } = e.detail.result
  //   map.flyTo({ center, zoom: 18 })
  // }

  // function doSomething() {
  //   const marker = getMarker()
  //   marker.togglePopup()
  //   map.flyTo({ center: marker.getLngLat(), zoom: 12 })
  // }

  function onMapRightClick(e) {
    const { lngLat } = e
    console.log(lngLat)
  }

  let getMarker
</script>

<Map accessToken={PUBLIC_MAPBOX_KEY} options={mapOptions} bind:map>
  <Marker lng={-77.0354461669922} lat={38.895575460651806} bind:getMarker>
    <div class="" slot="popup">
      <div
        class="mt-4 flex max-h-[32rem] w-full flex-none flex-col divide-y divide-gray-100 overflow-y-auto"
      >
        <div class="w-full flex-none p-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            class="mx-auto h-16 w-16 rounded-full"
          />
          <h2 class="mt-3 font-semibold text-gray-900">Tom Cook</h2>
          <p class="text-sm leading-6 text-gray-500">Director, Product Development</p>
        </div>
        <div class="flex flex-auto flex-col justify-between p-6">
          <dl class="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
            <dt class="col-end-1 font-semibold text-gray-900">Phone</dt>
            <dd>881-460-8515</dd>
            <dt class="col-end-1 font-semibold text-gray-900">URL</dt>
            <dd class="truncate">
              <a href="https://example.com" class="text-indigo-600 underline">https://example.com</a
              >
            </dd>
            <dt class="col-end-1 font-semibold text-gray-900">Email</dt>
            <dd class="truncate">
              <a href="/" class="text-indigo-600 underline">tomcook@example.com</a>
            </dd>
          </dl>
          <button
            type="button"
            class="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >Send message</button
          >
        </div>
      </div>
    </div>
  </Marker>
</Map>

<Search />
