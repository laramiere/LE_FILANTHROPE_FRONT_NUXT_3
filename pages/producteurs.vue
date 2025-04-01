<script lang="ts" setup>
import {
  populateHero,
  populateSeo,
} from '@/shared/populate/populateConfig'
import { transitionConfig } from '~/helpers/transitionConfig'

const { find } = useStrapi()
const config = useRuntimeConfig()
const { data } = await useAsyncData('producteur', async () => {
  try {
    const response = await find('producteur', {
      populate: {
        ...populateHero,
        ...populateSeo,
        pois: {
          populate: '*',
        },
      },
    })
    return {
      hero: response.data.hero,
      content: response.data.content,
      pois: response.data.pois,
      seo: response.data.seo,
    }
  }
  catch (error) {
    throw new Error(`Failed to fetch data: ${error}`)
  }
})
definePageMeta({
  pageTransition: transitionConfig,
})
useSeoMeta({
  title: data.value?.seo?.metaTitle,
  description: data.value?.seo?.metaDescription,
  ogTitle: data.value?.seo?.metaTitle,
  ogImage: data.value?.seo?.shareImage?.url ? `${config.public.apiBaseUrl}${data.value?.seo?.shareImage?.url}` : null,
})
</script>

<template>
  <div>
    <Hero
      v-if="data && data.hero"
      :title="data.hero.title"
      :subtitle="data.hero.subtitle"
      :picture-background="data.hero.pictureBackground || null"
      :picture="data.hero.picture || null"
      small
    />
    <Container>
      <Wysiwyg :content="data.content" />
    </Container>
    <Map
      v-if="data && data.pois"
      :pois="data.pois"
    />
  </div>
</template>
