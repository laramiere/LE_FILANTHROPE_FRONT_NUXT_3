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
            :__component="ComponentKeys.Board"
            :id="456"
            :carte_du_restaurant="data.carte_du_restaurant"
            :display-subtitle="false"
            :display-title="false"
        />
    </div>
</template>
<script lang="ts" setup>
import { ComponentKeys } from '@/shared/interfaces'
import type { CartInterface } from '@/shared/interfaces'
const { find } = useStrapi()
const { data, error } = await useAsyncData<CartInterface>('cartePage', async () => {
    const response = await find('la-carte', {
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
            },
            carte_du_restaurant: {
                populate: {
                  sectionLvl1: {
                    populate: {
                      sectionLvl2: {
                        populate: {
                          sectionLvl3: {
                            populate: '*'
                          }
                        }
                      }
                    }
                  }
                }
              }
        }
    })
    return response.data as CartInterface
})
</script>