<script lang="ts" setup>
import {
  populateHero,
  populateSeo,

} from '@/shared/populate/populateConfig'
import { transitionConfig } from '~/helpers/transitionConfig'

const { find } = useStrapi()
const config = useRuntimeConfig()
const { data } = await useAsyncData('articles', async () => {
  const [globalArticlesPageResult, articlesCollectionsResult] = await Promise.allSettled([
    find('article-single-type', {
      populate: {
        ...populateHero,
        ...populateSeo,
      },
    }),
    find('articles', {
      fields: ['title', 'slug', 'id'],
    }),
  ])
  const globalArticlesPageData = globalArticlesPageResult.status === 'fulfilled' ? globalArticlesPageResult.value.data : null
  const articlesCollections = articlesCollectionsResult.status === 'fulfilled' ? articlesCollectionsResult.value.data : null

  if (globalArticlesPageData && articlesCollections) {
    return {
      hero: globalArticlesPageData.hero,
      articles: articlesCollections,
      seo: globalArticlesPageData.seo,
    }
  }
  else {
    throw new Error('Failed to fetch data')
  }
})
useSeoMeta({
  title: data.value?.seo?.metaTitle,
  description: data.value?.seo?.metaDescription,
  ogTitle: data.value?.seo?.metaTitle,
  ogDescription: data.value?.seo?.metaDescription,
  ogImage: data.value?.seo?.shareImage?.url ? `${config.public.apiBaseUrl}${data.value?.seo?.shareImage?.url}` : null,
})
definePageMeta({
  pageTransition: transitionConfig,
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
    <Articles
      v-if="data && data.articles"
      :articles="data.articles"
    />
  </div>
</template>

<style lang="scss" scoped>
.article {
    margin-bottom: 11rem;

    @include mq($until: desktop) {
        margin-bottom: 9rem;
    }
}
</style>
