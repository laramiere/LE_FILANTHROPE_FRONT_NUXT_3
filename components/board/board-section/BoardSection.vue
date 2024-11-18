<template>
    <section class="board-section">
        <h3
            v-if="props.section.description"
            class="board-section__info fw-normal"
        >
            {{ props.section.description }}
        </h3>
        <ul
            v-if="section.sectionLvl3"
            class="board-section__list"
        >
            <li
                v-for="item in props.section.sectionLvl3"
                :class="{'is-hidden': item.carte_items.length === 0}"
                :key="`${item.id}-${item.title}`"
            >
                <BoardSectionItem
                    :section="item"
                />
            </li>
        </ul>
    </section>
</template>
<script lang="ts" setup>
import type { SectionLvl2 } from '@/shared/interfaces';

const props = defineProps<{
    section: SectionLvl2
}>()
</script>
<style lang="scss" scoped>
.board-section {
    padding-top: 5rem;

    @include mq($until: desktop) {
        padding-top: 2rem;
    }

    &__list {
        li {
            padding: 2rem 0;
            border-bottom: .1rem solid $black;

            @include mq($until: desktop) {
                padding: 1rem 0;
            }

            &.is-hidden {
                display: none;
            }

            &:first-child {
                border-top: .1rem solid $black;
            }
        }
    }

    &__info {
        font-size: 2rem;
        font-style: italic;
        margin-bottom: 2.5rem;

        @include mq($until: desktop) {
            font-size: 1.8rem;
            margin-bottom: 2rem;
        }
    }
}
</style>