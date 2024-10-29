<template>
    <div class="article">
        <ArticleItem
            v-for="(article, key) in props.articles"
            :key="article.id"
            :title="article.title"
            :link="article.documentId"
            :number="key + 1"
        />
    </div>
</template>
<script lang="ts" setup>
import type { ArticleItem } from '@/shared/interfaces'
const props = defineProps<{
    articles: ArticleItem[]
}>()
</script>