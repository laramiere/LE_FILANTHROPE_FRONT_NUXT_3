<script lang="ts" setup>
import type { CartInterface } from '@/shared/interfaces'
import { ComponentKeys } from '@/shared/interfaces'
import {
  populateCarteRestaurant,
  populateHero,
  populateSeo,
} from '@/shared/populate/populateConfig'

const config = useRuntimeConfig()
const { find } = useStrapi()
const { data } = await useAsyncData<CartInterface>('cartePage', async () => {
  const response = await find('la-carte', {
    populate: {
      ...populateHero,
      ...populateCarteRestaurant,
      ...populateSeo,
    },
  })
  return response.data as CartInterface
})
useSeoMeta({
  title: data.value?.seo.metaTitle,
  description: data.value?.seo.metaDescription,
  ogTitle: data.value?.seo.metaTitle,
  ogDescription: data.value?.seo.metaDescription,
  ogImage: data.value?.seo?.shareImage?.url ? `${config.public.apiBaseUrl}${data.value?.seo?.shareImage?.url}` : null,
})
</script>

<template>
  <div v-if="data">
    <Hero
      v-if="data && data.hero"
      :title="data.hero.title"
      :subtitle="data.hero.subtitle"
      :picture="data.hero.picture"
      small
    />
    <Container
      v-if="data.content"
    >
      <Wysiwyg :content="data.content" />
    </Container>
    <Board
      :id="456"
      :__component="ComponentKeys.Board"
      :carte_du_restaurant="data.carte_du_restaurant"
      :display-subtitle="false"
      :display-title="false"
    />
  </div>
</template>
