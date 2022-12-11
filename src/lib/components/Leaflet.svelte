<script>
  import { LeafletMap, Icon, Marker, Popup, TileLayer, ScaleControl } from 'svelte-leafletjs'

  const mapOptions = {
    center: [38.895575460651806, -77.0354461669922], // Washington DC
    zoom: 11
  }
  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

  const tileLayerOptions = {
    minZoom: 4,
    maxZoom: 20,
    maxNativeZoom: 19
  }

  const iconOptions = {
    iconUrl: '/favicon.png',
    iconSize: [41, 41],
    iconAnchor: [20, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28]
  }

  const scaleControlOptions = {
    maxWidth: 200
  }

  let leafletMap

  $: if (leafletMap) {
    // wait for the map to be ready
    const map = leafletMap.getMap()
    map.on('click', function (e) {
      console.log(e.latlng.lat, e.latlng.lng)
    })
  }
</script>

<LeafletMap options={mapOptions} bind:this={leafletMap}>
  <TileLayer url={tileUrl} options={tileLayerOptions} />
  <ScaleControl position="bottomleft" options={scaleControlOptions} />

  <Marker latLng={[38.895575460651806, -77.0354461669922]}>
    <Icon options={iconOptions} />
    <Popup><b>Changi Airport</b></Popup>
  </Marker>
</LeafletMap>
