<template>
    <nav
        class="board-filter"
        :class="{ 'board-filter--secondary': mainFilter === false }"
    >
        <ul>
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
const filterActif: Ref<string> = ref(props.filters[0])

watch(() => props.filters, (newFilters) => {
    filterActif.value = newFilters[0]
})
const emit = defineEmits<{
    (event: 'click', value: string) : void
}>()
const handleClick = (name: string) => {
    filterActif.value = name
    emit('click', name)
}
</script>
<style lang="scss" scoped>
.board-filter {
    background-color: $brown;
    border-radius: $global-radius;
    padding: 3rem;

    ul {
        display: flex;
        li {
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