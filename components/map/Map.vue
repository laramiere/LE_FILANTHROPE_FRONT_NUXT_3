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
                :src="`${config.public.apiBaseUrl}${activeItem.picture.url}`"
                :alt="activeItem.picture.alternativeText || activeItem.title"
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

const props = defineProps<{pois: POIInterface[]}>()
const config = useRuntimeConfig()
const zoom = ref(12);
const center: Ref<[number,number]> = ref([45.764042, 4.835659]);
const map = ref<LMap | null>(null);
const activeItem: Ref<POIInterface> = ref(props.pois[0])

onMounted(async () => {
  const L = (await import('leaflet')).default;

  const generateDivIcon = (icon: string, activePin: boolean) => {
    return L.divIcon({
      className: `map-custom-pin ${activePin ? 'pin-actif' : ''}`,
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
    props.pois.forEach((item, key) => {
      L.marker([item.lat, item.lng], {icon: generateDivIcon(item.pin, key === 0)}).on('click', (event) => {
        const latLng = [event.target._latlng.lat, event.target._latlng.lng]
        removeActivClassOnPin()
        event.target._icon.classList.add('pin-actif')
        activeItem.value = props.pois.find(item => item.lat === latLng[0] && item.lng === latLng[1]) || props.pois[0]
        map.value.flyTo(latLng)
      }).addTo(map.value)
    })

    const bounds = new L.LatLngBounds(props.pois.map(item => [item.lat, item.lng]))
    map.value.fitBounds(bounds)
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
        background-color: $white;
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