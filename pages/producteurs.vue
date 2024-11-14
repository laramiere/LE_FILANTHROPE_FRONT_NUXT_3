<template>
    <div>
        <Hero
            v-if="data && data.hero"
            :title="data.hero.title"
            :subtitle="data.hero.subtitle"
            :picture="data.hero.picture"
            small
        />
        <Map
            v-if="data && data.pois"
            :pois="data.pois"
        />
    </div>
</template>
<script lang="ts" setup>
import type { ProducteurInterface } from '@/shared/interfaces'
const { find } = useStrapi()
const { data } = await useAsyncData<ProducteurInterface>('producteur', async () => {
    try {
        const response = await find('producteur', {
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
                pois: {
                    populate: '*'
                }
            }
        })
        return {
            hero: response.data.hero,
            pois: response.data.pois
        } as ProducteurInterface
    } catch (error) {
        console.log('error', error)
    }
})
console.log('data', data)
</script>