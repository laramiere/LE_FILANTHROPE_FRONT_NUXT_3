<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()
const Default = resolveComponent('Default')
const Facebook = resolveComponent('Facebook')
const Insta = resolveComponent('Insta')
const Linkedin = resolveComponent('Linkedin')

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

<template>
  <component :is="getPicto" />
</template>
