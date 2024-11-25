<template>
    <nuxt-link
        ref="articleItemRef"
        class="article-item"
        :class="{ 'swing-animation': articleIsVisible }"
        :to="`/articles/${props.slug}`"
    >
        <div>
            <div class="article-item__main">
                <span class="article-item__number fw-light">
                    {{ getNumber }}
                </span>
                <h2 class="article-item__title fw-light">
                    {{ props.title }}
                </h2>
            </div>
            <Glasses/>
        </div>
    </nuxt-link>
</template>
<script lang="ts" setup>
import { useElementVisibility } from '@vueuse/core'
import { ref } from 'vue'
const props = defineProps<{
    title: string;
    slug: string;
    number: number;
}>()
const articleItemRef = ref(null)
const articleIsVisible = useElementVisibility(articleItemRef)
const getNumber = computed(() => {
    return props.number < 10 ? `0${props.number}` : props.number
})
</script>

<style lang="scss" scoped>
.article-item {
    display: block;
    position: relative;
    color: $black;
    text-decoration: none;
    padding: 2rem;
    overflow: hidden;
    transition: $transition;
    border-radius: $global-radius;
    transform: rotateX(-90deg);
    transform-origin: top center;
    border: .1rem solid $black;

    @include mq($until: desktop) {
        padding: 1.5rem;
    }

    &::before {
        content: '';
        z-index: 1;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $brown;
        transition: $transition;
    }
    > div {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @include mq($until: desktop) {
            display: block;
        }

        svg {
            width: 8rem;
            height: 8rem;
            fill: currentColor;

            @include mq($until: desktop) {
                width: 3rem;
                height: 3rem;
            }
        }
    }
    &__main {
        display: flex;
        align-items: center;

        @include mq($until: desktop) {
            display: block;
        }
    }
    &__number {
        font-size: 10rem;
        margin-right: 10rem;

        @include mq($until: desktop) {
            font-size: 1.4rem;
            margin-right: 0;
            margin-bottom: 1rem;

        }
    }
    &__title {
        font-size: 4rem;
        text-align: left;

        @include mq($until: desktop) {
            font-size: 2rem;
        }
    }

    &:hover {
        color: $white;
        border: .1rem solid $brown;

        &::before {
            top: 0;
        }
    }


}
</style>