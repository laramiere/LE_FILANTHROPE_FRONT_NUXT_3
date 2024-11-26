<script lang="ts" setup>
import type { ArticleItem } from '@/shared/interfaces'

const props = defineProps<{
  articles: ArticleItem[]
}>()
</script>

<template>
  <div
    v-if="props.articles.length"
    class="article"
  >
    <ArticleItem
      v-for="(article, key) in props.articles"
      :key="article.id"
      :title="article.title"
      :slug="article.slug"
      :number="key + 1"
    />
  </div>
</template>

<style lang="scss" scoped>
.article {
    .article-item {
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }
}
</style>
