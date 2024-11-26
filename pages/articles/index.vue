<template>
<div>
    <Hero
        v-if="data && data.hero"
        :title="data.hero.title"
        :subtitle="data.hero.subtitle"
        :picture="data.hero.picture"
        small
    />
    <Articles
        v-if="data && data.articles"
        :articles="data.articles"
    />
</div>
</template>
<script lang="ts" setup>
import { populateHero } from '@/shared/populate/populateConfig'
const { find } = useStrapi()
const { data } = await useAsyncData('articles', async () => {

    const [globalArticlesPageResult, articlesCollectionsResult] = await Promise.allSettled([
        find('article-single-type', {
            populate: {
                ...populateHero
            }
        }),
        find('articles', {
            fields: ['title', 'slug', 'id']
        })
    ])
    const globalArticlesPageData = globalArticlesPageResult.status === 'fulfilled' ? globalArticlesPageResult.value.data : null
    const articlesCollections = articlesCollectionsResult.status === 'fulfilled' ? articlesCollectionsResult.value.data : null

    if (globalArticlesPageData && articlesCollections) {
    return {
      hero: globalArticlesPageData.hero,
      articles: articlesCollections
    }

  } else {
    throw new Error('Failed to fetch data')
  }
})
</script>
<style lang="scss" scoped>
.article {
    margin-bottom: 11rem;

    @include mq($until: desktop) {
        margin-bottom: 9rem;
    }
}
</style>
