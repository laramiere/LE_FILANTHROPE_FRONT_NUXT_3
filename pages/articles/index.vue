<template>
<div>
    <Hero
        v-if="data && data.hero"
        :title="data.hero.title"
        :subtitle="data.hero.subtitle"
        :picture="data.hero.picture"
        :media-rotation="generateRandomNumber()"
    />
    <Articles
        v-if="data && data.articles"
        :articles="data.articles"
    />
</div>
</template>
<script lang="ts" setup>
import type { ArticlesInterface } from '@/shared/interfaces'
import { useGenericAction } from '@/shared/composable';

const { find } = useStrapi()
const { generateRandomNumber } = useGenericAction()


const { data, error } = await useAsyncData<ArticlesInterface>('articles', async () => {
    const [globalArticlesPageResult, articlesCollectionsResult] = await Promise.allSettled([
        find('article-single-type', {
            populate: {
                hero: {
                    populate: {
                        picture: {
                            populate: {
                                file: {
                                fields: ['url', 'alternativeText']
                                }
                            }
                        }
                    }
                }
            }
        }),
        find('articles', {
            populate: {
                fields: ['title', 'documentId']
            }
        })
    ])
    console.log('articlesCollectionsResult', articlesCollectionsResult.value.data)
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
}
</style>