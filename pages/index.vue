<script lang="ts" setup>
import type { ComponentName, HomeInterface } from '@/shared/interfaces'
import type { Ref } from 'vue'
import { ComponentKeys } from '@/shared/interfaces'
import {
  populateAvisClients,
  populateCarteRestaurant,
  populateHero,
  populateHoraireRestaurant,
  populatePictures,
  populateSeo,
} from '@/shared/populate/populateConfig'

const config = useRuntimeConfig()
const { find } = useStrapi()

const Timetable = resolveComponent('Timetable')
const Board = resolveComponent('Board')
const Testimonial = resolveComponent('Testimonial')
const Solo = resolveComponent('Solo')

const homeData: Ref<HomeInterface | null> = ref(null)
const errorFetchData = ref(null)

const { data, error } = await useAsyncData<HomeInterface>('home', async () => {
  const response = await find('home', {
    populate: {
      ...populateHero,
      ...populateSeo,
      pageZone: {
        on: {
          [ComponentKeys.Timetable]: {
            populate: {
              ...populateHoraireRestaurant,
            },
          },
          [ComponentKeys.Board]: {
            populate: {
              ...populateCarteRestaurant,
            },
          },
          [ComponentKeys.Solo]: {
            populate: '*',
          },
          [ComponentKeys.Testimonial]: {
            populate: {
              ...populateAvisClients,
              ...populatePictures,
            },
          },
        },
      },
    },
  })
  return response.data as HomeInterface
})
useSeoMeta({
  title: data.value?.seo?.metaTitle,
  description: data.value?.seo?.metaDescription,
  ogTitle: data.value?.seo?.metaTitle,
  ogDescription: data.value?.seo?.metaDescription,
  ogImage: data.value?.seo?.shareImage?.url ? `${config.public.apiBaseUrl}${data.value?.seo?.shareImage?.url}` : null,
})

function getComponent(name: ComponentName) {
  switch (name) {
    case ComponentKeys.Timetable:
      return Timetable
    case ComponentKeys.Board:
      return Board
    case ComponentKeys.Testimonial:
      return Testimonial
    case ComponentKeys.Solo:
      return Solo
    default:
      throw new Error(`Unsupported component type`)
  }
}
if (error.value) {
  errorFetchData.value = error.value
}
else {
  homeData.value = data.value
}
</script>

<template>
  <div>
    <Hero
      v-if="homeData"
      :title="homeData.hero.title"
      :subtitle="homeData.hero.subtitle"
      :display-logo="homeData.hero.displayLogoPhil"
      :picture-background="homeData.hero.pictureBackground || null"
      :picture="homeData.hero.picture || null"
    />
    <template v-if="homeData?.pageZone">
      <template
        v-for="component in homeData.pageZone"
        :key="component.id"
      >
        <component
          :is="getComponent(component.__component)"
          v-bind="{ ...component }"
        />
      </template>
    </template>
  </div>
</template>
