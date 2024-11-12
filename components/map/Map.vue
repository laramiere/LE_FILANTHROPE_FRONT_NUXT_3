<template>
    <div class="map">
        <div class="map__main">
                <LMap
                    style="height: 350px"
                    :zoom="6"
                    :center="[47.21322, -1.559482]"
                    :use-global-leaflet="false"
                    ref="map"
                    @ready="onMapReady"
                >
                    <LTileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                        layer-type="base"
                        name="OpenStreetMap"
                    />
                </LMap>
        </div>
        <div class="map__side">
            <div class="map__info">

            </div>
            <div class="map__media">

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const map = ref(null)
const onMapReady = () => {
    console.log('map.value.leafletObject', map.value.leafletObject)
}
</script>
<style lang="scss" scoped>
.map {
    &__main {
        > div {
            width: 100%;
            height: 100vh;
        }
    }
}
</style>