<template>
    <section class="board">
        <h2
            v-if="props.displayTitle"
            class="board__title fs-3"
        >
            {{ props.carte_du_restaurant.title }}
        </h2>
        <p
            v-if="props.displaySubtitle && props.carte_du_restaurant.subtitle"
            class="board__subtitle"
        >
            {{ props.carte_du_restaurant.subtitle }}
        </p>
        <div class="board__top">
            <BoardFilter
                :filters="mainCategory"
                @click="changeMainCategory"
            />
            <BoardFilter
                :filters="subCategory"
                :mainFilter="false"
                :class="{ 'loading': boardStats.subActiveCategoryLoading }"
                @click="changeSubCategory"
            />
        </div>
        <div class="board__main">
            <BoardSection
                v-if="boardStats.sectionActive"
                :section="boardStats.sectionActive"
            />
        </div>
    </section>
</template>
<script lang="ts" setup>
import type {
    Board,
    SectionLvl1,
    SectionLvl2
} from '@/shared/interfaces'
import type { Ref } from 'vue'

import { computed } from 'vue'

const props = withDefaults(defineProps<Board>(), {
    displayTitle: true,
    displaySubtitle: true
})

const changeMainCategory = (name : string) => {
    const newActiveCategory = props.carte_du_restaurant.sectionLvl1.find(item => item.title === name)
    boardStats.subActiveCategoryLoading = true
    if (newActiveCategory) {
        setTimeout(() => {
            boardStats.mainActiveCategory = name
            boardStats.subActiveCategory = newActiveCategory.sectionLvl2[0].title
            boardStats.sectionActive = newActiveCategory.sectionLvl2[0]
            activeCategory.value = newActiveCategory
            boardStats.subActiveCategoryLoading = false
        }, 400)
    }
}

const changeSubCategory = (name: string) => {
    boardStats.subActiveCategory = name
    findSectionToDisplay()
}

const findSectionToDisplay = () => {
    const mainCategory = props.carte_du_restaurant.sectionLvl1.find(item => item.title === boardStats.mainActiveCategory)
    if (mainCategory) {
        const subCategory = mainCategory.sectionLvl2.find(item => item.title === boardStats.subActiveCategory)
        if (subCategory) {
            boardStats.sectionActive = subCategory
        }
    }
}

const mainCategory = props.carte_du_restaurant.sectionLvl1.reduce<string[]>((acc, currentItem) => {
    acc.push(currentItem.title)
    return acc
},[])

const subCategory = computed(() => {
    return activeCategory.value.sectionLvl2.reduce<string[]>((acc, currentItem) => {
        acc.push(currentItem.title)
        return acc
    }, [])
})

const activeCategory: Ref<SectionLvl1> = ref(props.carte_du_restaurant.sectionLvl1[0])

const boardStats = reactive<{
    mainActiveCategory: string | null,
    subActiveCategoryLoading: boolean,
    subActiveCategory: string | null,
    sectionActive: null | SectionLvl2
}>({
    mainActiveCategory: null,
    subActiveCategory: null,
    subActiveCategoryLoading: false,
    sectionActive: props.carte_du_restaurant.sectionLvl1[0].sectionLvl2[0]
})


</script>
<style lang="scss" scoped>
.board {
    margin-bottom: 11rem;

    @include mq($until: desktop) {
        margin-bottom: 9rem;
    }

    &__title {
        line-height: 1;
        margin-bottom: 5rem;

        @include mq($until: desktop) {
            font-size: 3rem;
            margin-bottom: 2rem;
        }
    }
    &__subtitle {
        margin-bottom: 5rem;

        @include mq($until: desktop) {
            font-size: 1.4rem;
            margin-bottom: 2rem;
        }
    }
    &__top {
        .board-filter {
            &:not(:last-child) {
                margin-bottom: 2rem;
            }
        }
    }
}
</style>