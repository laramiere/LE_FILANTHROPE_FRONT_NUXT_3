<template>
    <div
        class="board-section-item"
        :class="{ 'actif': actif }"
        v-if="props.section.carte_items.length"
    >
        <button
            class="board-section-item__btn fw-light"
            @click="actif = !actif"
        >
            {{ props.section.title }}
            <span>
                <Cross />
            </span>
        </button>
        <div class="board-section-item__content">
            <BoardItem
                v-for="item in props.section.carte_items"
                :item
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { SectionLvl3 } from '@/shared/interfaces'
const actif = ref(false)
const props = defineProps<{
    section: SectionLvl3
}>()
</script>
<style lang="scss" scoped>
.board-section-item {
    &.actif {
        .board-section-item__content {
            max-height: 9999rem;
            padding-top: 2rem;
        }
        .board-section-item__btn {
            > span {
                transform: rotate(0);
                background-color: $black;
                color: $white;
            }
        }
    }

    &__btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0;
        margin: 0;
        border: none;
        background-color: transparent;
        font-size: 3rem;
        text-transform: uppercase;

        @include mq($until: desktop) {
            font-size: 1.8rem;
        }

        &:hover {
            cursor: pointer;
            > span {
                background-color: $black;
                color: $white;
            }
        }

        > span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4.5rem;
            height: 4.5rem;
            color: $black;
            border-radius: 50%;
            border: .1rem solid $black;
            transform: rotate(45deg);
            transition: $transition;

            @include mq($until: desktop) {
                width: 3rem;
                height: 3rem;
            }

            svg {
                fill: currentColor;
                width: 2rem;
                height: 2rem;
                // transition: $transition;
            }
        }
    }

    &__content {
        padding-top: 0;
        max-height: 0rem;
        overflow: hidden;

        .board-item {
            &:not(:last-child) {
                margin-bottom: 1.5rem;
            }
        }
    }
}
</style>