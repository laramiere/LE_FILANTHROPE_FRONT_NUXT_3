<template>
    <component :is="getPicto" />
</template>
<script lang="ts" setup>
import { computed } from 'vue'

const Default = resolveComponent('Default')
const Facebook = resolveComponent('Facebook')
const Insta = resolveComponent('Insta')
const Linkedin = resolveComponent('Linkedin')

const props = defineProps<{
    name: string
}>()

const getPicto = computed(() => {
    switch (props.name) {
        case 'Facebook':
            return Facebook
        case 'Insta':
            return Insta
        case 'Linkedin':
            return Linkedin
        default:
            return Default
    }
})
</script>