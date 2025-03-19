<script lang="ts" setup>
import { ComponentKeys } from '@/shared/interfaces'
import {
  populateHero,
  populateHoraireRestaurant,
  populateSeo,
} from '@/shared/populate/populateConfig'

const config = useRuntimeConfig()
const { find } = useStrapi()
const { data } = await useAsyncData('reservation', async () => {
  try {
    const response = await find('reservation', {
      populate: {
        ...populateHoraireRestaurant,
        ...populateHero,
        ...populateSeo,
      },
    })
    return response.data
  }
  catch (error) {
    throw new Error(`Failed to fetch data: ${error}`)
  }
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
    <Duo>
      <iframe src="https://bookings.zenchef.com/results?rid=354078&fullscreen=1" frameborder="0" scrolling="yes" />
      <template
        v-if="data && data.horaire_restaurant"
        #side
      >
        <Timetable
          :id="data.horaire_restaurant?.id || 0"
          :horaire_restaurant="data.horaire_restaurant"
          :__component="ComponentKeys.Timetable"
          small-display
        />
      </template>
    </Duo>
  </div>
</template>

<style lang="scss" scoped>
.duo {
    &__main {
        iframe {
            width: 100%;
            height: 75rem;
        }
    }
}
</style>
