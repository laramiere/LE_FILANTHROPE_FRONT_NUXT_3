<template>
    <button
        class="c-btn"
        :class="{ 'c-btn--rounded': rounded }"
        @click="emit('click')"
    >
        <span>
            <slot />
        </span>
    </button>
</template>
<script setup lang="ts">

interface Props {
    rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    rounded: false
})
const emit = defineEmits(['click'])

</script>
<style lang="scss">
.c-btn {
    z-index: 1;
    position: relative;
    padding: 1.5rem 2rem;
    color: $black;
    border-radius: 3rem;
    border: .1rem solid $black;
    overflow: hidden;
    background-color: $white;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    transition: $transition;
    cursor: pointer;
    
    &:hover {
        color: $white;
        &::before {
            top: 0;
        }
    }

    &::before {
        content: '';
        z-index: 0;
        position: absolute;
        top: 100%;
        left: 0;
        width: 150%;
        height: 150%;
        background-color: $black;
        transform-origin: left bottom;
        transition: $transition;
    }

    span {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        > svg {
            fill: currentColor;
            display: block;
            width: 2rem;
            height: auto;
            margin-right: .8rem;
        }
    }

    &--rounded {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.2rem;
        height: 5.2rem;
        padding: 0;
        
        span {
            svg {
                margin-right: 0;
            }
        }
    }
}
</style>