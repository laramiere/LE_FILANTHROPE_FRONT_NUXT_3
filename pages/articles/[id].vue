<template>
    <div v-if="article">
        <Hero
            :title="article.title"
            :article="true"
            :picture="{
                id: article.media.documentId,
                file: {
                    alternativeText: article.media?.alternativeText || article.title,
                    url: article.media.url
                }
            }"
        />
        <Duo>
            <Wysiwyg :content="article.content"/>
            <template
                v-if="article?.horaire_restaurant"
                #side
            >
                <Timetable
                        :horaire_restaurant="article.horaire_restaurant"
                        :__component="ComponentKeys.Timetable"
                        :id="article.horaire_restaurant?.id || 0"
                        small-display
                />
            </template>
        </Duo>
    </div>
</template>
<script lang="ts" setup>
import type { ArticleItem } from '@/shared/interfaces'
import { ComponentKeys } from '@/shared/interfaces'
import {
    populateHoraireRestaurant,
    populateMedia
} from '@/shared/populate/populateConfig'
const { findOne } = useStrapi()
const route = useRoute()
const {data: article, error} = await useAsyncData<ArticleItem>('article', async () => {
    const article = await findOne('articles', {
        filters: {
            slug: {
                $eq: route.params.id
            }
        },
        populate: {
            ...populateMedia,
            ...populateHoraireRestaurant
        }
    })
    return article.data[0] as ArticleItem
})
</script>
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