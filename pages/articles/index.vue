<template>
<div>
    <Hero
        v-if="articlesData"
        :title="articlesData.title"
        :subtitle="articlesData.description"
        
    />
</div>
</template>
<script lang="ts" setup>
import type { Picture } from '@/shared/interfaces'
const { find } = useStrapi()
interface ArticleInterface {
    title: string;
    description: string;
    media: Picture;
}
const articlesData: Ref< ArticleInterface |null> = ref(null)
const { data, error } = await useAsyncData('articles', async () => {
    const response = await find('article-single-type', {
        populate: '*'
    })
    return response.data
})
console.log('data', data.value.media)
if(data.value) {
    articlesData.value = data.value
}
</script>
<style lang="scss" scoped>
</style>