<script lang="ts" setup>
import { transitionConfig } from './helpers/transitionConfig'

const testingValue = useState('needTransitionPage', () => false)
watch(testingValue, value => console.log('testingValue', value))
</script>

<template>
  <NuxtLayout>
    <NuxtPage :transition="transitionConfig(testingValue)" />
    <PageTransition />
  </NuxtLayout>
</template>
