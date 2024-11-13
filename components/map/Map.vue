<template>
    <div class="map">
        <div class="map__main gr" id="map" />
        <div class="map__side">
            <div class="map__info gr">
              <h2>
                {{ activeItem.title }}
              </h2>
              <Wysiwyg :content="activeItem.content"/>
              <VButton
                externalLink
                :href="activeItem.link"
              >
                Voir la page
              </VButton>
            </div>
            <div class="map__media gr">
              <img
                :src="activeItem.media.url"
                :alt="activeItem.media.alternativeText || activeItem.title"
                loading="lazy"
              />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import "leaflet/dist/leaflet.css"
import "@/assets/scss/_leaflet.scss"

import type { Ref } from 'vue'
import type { POIInterface } from '@/shared/interfaces'
import { IconObject } from '@/shared/interfaces'
import { POI } from '@/shared/data/fackData'


const zoom = ref(12);
const center: Ref<[number,number]> = ref([45.764042, 4.835659]);
const map = ref<LMap | null>(null);
const tile = {
  url: 'https://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',
  attribution: 'Google',
  layerType: 'base',
  name: 'OpenStreetMap',
  subDomains: ['mt0', 'mt1', 'mt2', 'mt3'],
};
const fakeMarkerArray: POIInterface[] = POI
const activeItem: Ref<POIInterface> = ref(fakeMarkerArray[0])

onMounted(async () => {
  const L = (await import('leaflet')).default;
  const generateDivIcon = (icon: string) => {
    return L.divIcon({
      className: 'map-custom-pin',
      html: `<button>
              <span>${IconObject[icon]}</span>
            </button>`
    })
  }

  const removeActivClassOnPin = () => {
    const pins = document.querySelectorAll('.pin-actif')
    if(pins && pins.length) {
      pins.forEach(pin => {
        pin.classList.remove('pin-actif')
      })
    }
  }

  const generateMarker = () => {
    fakeMarkerArray.forEach(item => {
      L.marker(item.latlng, {icon: generateDivIcon(item.pin)}).on('click', (event) => {
        const latLng = [event.target._latlng.lat, event.target._latlng.lng]
        removeActivClassOnPin()
        event.target._icon.classList.add('pin-actif')
        activeItem.value = fakeMarkerArray.find(item => item.latlng[0] === latLng[0] && item.latlng[1] === latLng[1]) || fakeMarkerArray[0]
        map.value.flyTo(latLng)
      }).addTo(map.value)
    })
  }

  map.value = L.map('map', {
    center: center.value,
    zoom: zoom.value,
    zoomControl: false
  })

  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	  minZoom: 0,
	  maxZoom: 20,
	  attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	  ext: 'png'
  }).addTo(map.value);

  generateMarker()
  const bounds = new L.LatLngBounds(fakeMarkerArray.map(item => item.latlng))
  map.value.fitBounds(bounds)
});
</script>
<style lang="scss" scoped>
.map {
    display: grid;
    grid-template-columns: 60% calc(40% - 2rem);
    column-gap: 2rem;
    margin-bottom: 11rem;

    &__main {
        position: relative;
        width: 100%;
        min-height: 80rem;
        background-color: $orange;
    }

    &__side {
      display: flex;
      flex-direction: column;
    }

    &__info {
      background-color: $orange;
      color: $black;
      margin-bottom: 2rem;
      padding: 3rem;
      max-height: 40rem;
      overflow-y: auto;

       > .c-btn  {
        margin-top: 2rem;
       }

      &:only-child {
       max-height: 100%;
      }

    }

    &__media,
    &__info {
      &:only-child {
        flex: 1 1 100%;
      }
    }

    &__media {
      flex: 1 1 38rem;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
}

</style>