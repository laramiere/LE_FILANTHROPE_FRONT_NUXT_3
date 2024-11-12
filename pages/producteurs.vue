<template>
    <ClientOnly>
        <div>
            <Hero
                title="Nos Producteurs"
                subtitle="Que de bon produits"
                :picture="{
                    id: 'hui67gye',
                    file: {
                        alternativeText: 'Nos producteurs',
                        url: '/pictures/picture_1.jpg'
                    }
                }"
                small
            />
            <component :is="MapComponent" />
        </div>
    </ClientOnly>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
const MapComponent = ref(null)
onMounted(() => {
    MapComponent.value = defineAsyncComponent(() => import('@/components/map/Map.vue'))
})
</script>