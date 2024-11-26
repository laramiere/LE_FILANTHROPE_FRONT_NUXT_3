<script lang="ts" setup>
import type { ArticleItem } from '@/shared/interfaces'
import { ComponentKeys } from '@/shared/interfaces'
import {
  populateHoraireRestaurant,
  populateMedia,
  populateSeo,
} from '@/shared/populate/populateConfig'

const { findOne } = useStrapi()
const route = useRoute()
const config = useRuntimeConfig()
const { data: article } = await useAsyncData<ArticleItem>('article', async () => {
  const article = await findOne('articles', {
    filters: {
      slug: {
        $eq: route.params.id,
      },
    },
    populate: {
      ...populateMedia,
      ...populateHoraireRestaurant,
      ...populateSeo,
    },
  })
  return article.data[0] as ArticleItem
})
useSeoMeta({
  title: article.value?.seo.metaTitle,
  description: article.value?.seo.metaDescription,
  ogTitle: article.value?.seo.metaTitle,
  ogDescription: article.value?.seo.metaDescription,
  ogImage: article.value?.seo?.shareImage?.url ? `${config.public.apiBaseUrl}${article.value?.seo?.shareImage?.url}` : null,
})
</script>

<template>
  <div v-if="article">
    <Hero
      :title="article.title"
      :article="true"
      :picture="{
        id: article.media.documentId,
        file: {
          alternativeText: article.media?.alternativeText || article.title,
          url: article.media.url,
        },
      }"
    />
    <Duo>
      <Wysiwyg :content="article.content" />
      <template
        v-if="article?.horaire_restaurant"
        #side
      >
        <Timetable
          :id="article.horaire_restaurant?.id || 0"
          :horaire_restaurant="article.horaire_restaurant"
          :__component="ComponentKeys.Timetable"
          small-display
        />
      </template>
    </Duo>
  </div>
</template>

<style lang="scss" scoped>
.article {
    margin-bottom: 11rem;
    display: grid;
    grid-template-columns: 70% 30%;

    &--full {
        grid-template-columns: 1fr;

        .article__main {
            padding-right: 0;
        }
    }

    &__main {
        padding-right: 10rem;
    }

    &__side {
        > * {
            top: 2rem;
            position: sticky;
        }
    }
}
</style>
