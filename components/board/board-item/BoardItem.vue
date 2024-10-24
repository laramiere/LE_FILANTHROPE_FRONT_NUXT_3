<template>
    <div class="board-item">
        <div class="board-item__top">
            <h3 class="board-item__title">
                {{ props.item.title }}
            </h3>
            <div class="price">
                {{ props.item.price }}€
            </div>
        </div>
        <p v-if="props.item.subtitle" class="board-item__desc">
            {{ props.item.subtitle }}
        </p>
    </div>
</template>
<script lang="ts" setup>
import type { CardItem } from '@/shared/interfaces'
const props = defineProps<{item: CardItem}>()
</script>
<style scoped lang="scss">
.board-item {
    &__top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    &__title {
        font-weight: $font-weight-normal;
    }
    &__desc {
        font-size: 1.8rem;
        font-style: italic;
        font-weight: $font-weight-light;
    }
}
</style>