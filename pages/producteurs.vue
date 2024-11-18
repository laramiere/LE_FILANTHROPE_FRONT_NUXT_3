<template>
    <div>
        <Hero
            v-if="data && data.hero"
            :title="data.hero.title"
            :subtitle="data.hero.subtitle"
            :picture="data.hero.picture"
            small
        />
        <Container>
            <Wysiwyg :content="data.content"/>
        </Container>
        <Map
            v-if="data && data.pois"
            :pois="data.pois"
        />
    </div>
</template>
<script lang="ts" setup>
import {
    populateHero
} from '@/shared/populate/populateConfig'
const { find } = useStrapi()
const { data } = await useAsyncData('producteur', async () => {
    try {
        const response = await find('producteur', {
            populate: {
                ...populateHero,
                pois: {
                    populate: '*'
                }
            }
        })
        return {
            hero: response.data.hero,
            content: response.data.content,
            pois: response.data.pois
        }
    } catch (error) {
        console.log('error', error)
    }
})
</script>