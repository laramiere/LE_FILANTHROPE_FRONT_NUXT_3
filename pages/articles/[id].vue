<template>
    <div>
        <Hero
            :title="data.article.title"
            article
            :picture="{
                id: data?.article.media.id,
                file: {
                    alternativeText: data?.article.media.alternativeText,
                    url: data?.article.media.url,
                    id: data?.article.media.id,
                    documentId: data?.article.media.documentId
                }
            }"
        />
    </div>
</template>
<script lang="ts" setup>
const { findOne } = useStrapi()
const route = useRoute()
const {data, error} = await useAsyncData('article', async () => {
    const article = await findOne('articles', {
        filters: {
            slug: {
                $eq: route.params.id
            }
        },
        populate: '*'
    })
    return {
        article: article.data[0]
    }
})
console.log('data', data.value.article)
</script>