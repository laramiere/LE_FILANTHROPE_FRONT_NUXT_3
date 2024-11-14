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
        <article
            class="article"
            :class="{'article--full' : !article?.horaire_restaurant}"
        >
            <section class="article__main">
                <Wysiwyg :content="article.content"/>
            </section>
            <section
                class="article__side"
                v-if="article?.horaire_restaurant"
            >
                <Timetable
                    :horaire_restaurant="article.horaire_restaurant"
                    :__component="ComponentKeys.Timetable"
                    :id="article.horaire_restaurant?.id || 0"
                    small-display
                />
            </section>
        </article>
    </div>
</template>
<script lang="ts" setup>
import type { ArticleItem } from '@/shared/interfaces'
import { ComponentKeys } from '@/shared/interfaces'
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
            media: {
                fields: [
                    'alternativeText',
                    'url',
                ]
            },
            horaire_restaurant: {
                populate: {
                  timetableItem: {
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
              }
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