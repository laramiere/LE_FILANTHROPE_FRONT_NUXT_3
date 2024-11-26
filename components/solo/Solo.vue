<script lang="ts" setup>
import type { SoloComponent } from '@/shared/interfaces'

const props = defineProps<SoloComponent>()
</script>

<template>
  <Container>
    <Wysiwyg :content="props.content.body" />
  </Container>
</template>
