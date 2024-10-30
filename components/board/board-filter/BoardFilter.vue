<template>
    <nav
        class="board-filter"
        :class="{ 'board-filter--secondary': mainFilter === false }"
        @mousedown="handleMouseDown"
        @mouseup="handleMouseUp"
        @mousemove="handleMouseMove"
    >
        <ul ref="filterList">
            <li
                v-for="filter in props.filters"
                :key="filter"
            >
                <button
                :class="{'actif': filterActif === filter}"
                @click="handleClick(filter)"
                >
                    {{ filter }}
                </button>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import type { Ref } from 'vue'
import { defineEmits, watch } from 'vue'

const props = withDefaults(defineProps<{
    mainFilter?: boolean,
    filters: string[]
}>(), {
    mainFilter: true
})
const filterList = ref<HTMLElement | null>(null)

let isMouseDown = false
let startX = 0
let scrollLeft = 0

const handleMouseDown = (event: MouseEvent) => {
    isMouseDown = true
    startX = event.pageX - (filterList.value?.offsetLeft || 0)
    scrollLeft = filterList.value?.scrollLeft || 0
}
const handleMouseUp = () => {
    isMouseDown = false
}
const handleMouseMove = (event: MouseEvent) => {
    if (!isMouseDown) return
    event.preventDefault()
    const x = event.pageX - (filterList.value?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (filterList.value) {
        filterList.value.scrollLeft = scrollLeft - walk
    }
}
const filterActif: Ref<string> = ref(props.filters[0])

watch(() => props.filters, (newFilters) => {
    filterActif.value = newFilters[0]
})
const emit = defineEmits<{
    (event: 'click', value: string) : void
}>()
const handleClick = (name: string) => {
    if (filterActif.value !== name) {
        filterActif.value = name
        emit('click', name)
    }
}
</script>
<style lang="scss" scoped>
.board-filter {
    position: relative;
    z-index:1;
    background-color: $brown;
    border-radius: $global-radius;
    padding: 3rem;
    opacity: 1;
    transition: $transition;

    &.loading {
        z-index: 0;
        opacity: 0;
        transform: translateY(calc( -100% - 2rem));
    }

    ul {
        display: flex;
        overflow: hidden;
        li {
            flex: 0 1 auto;
            &:not(:last-child) {
                margin-right: 4rem;
            }
        }
    }

    button {
        border: none;
        background-color: transparent;
        text-transform: uppercase;
        color: $white;
        transition: $transition;
        font-weight: $font-weight-bold;
        font-size: 3rem;
        white-space: nowrap;
        user-select: none;

        &:hover,
        &.actif {
            cursor: pointer;
            color: $orange;
        }
    }

    &--secondary {
        background-color: $orange;

        button {
            text-transform: none;

            &:hover,
            &.actif {
                color: $black;
            }
        }
    }
}
</style>