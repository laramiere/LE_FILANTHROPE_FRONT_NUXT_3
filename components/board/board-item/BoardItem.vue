<template>
    <div
        class="board-item"
        itemscope
        itemtype="https://schema.org/MenuItem"
    >
        <div class="board-item__top">
            <h3
                class="board-item__title"
                itemprop="name"
            >
                {{ props.item.title }}
            </h3>
            <div
                class="price"
                itemscope
                itemtype="https://schema.org/Offer"
            >
                <span
                    itemprop="price"
                    :content="props.item.price"
                >
                    {{ props.item.price }}
                </span>
                <span
                    itemprop="priceCurrency"
                    content="EUR"
                >
                    €
                </span>
            </div>
        </div>
        <p
            v-if="props.item.subtitle"
            class="board-item__desc"
            itemprop="description"
        >
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