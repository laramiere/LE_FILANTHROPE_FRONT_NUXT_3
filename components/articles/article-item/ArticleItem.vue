<template>
    <nuxt-link
        class="article-item"
        :to="props.link"
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
const props = defineProps<{
    title: string;
    link: string;
    number: number;
}>()
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

        svg {
            width: 8rem;
            height: 8rem;
            fill: currentColor;
        }
    }
    &__main {
        display: flex;
        align-items: center;
    }
    &__number {
        font-size: 10rem;
        margin-right: 10rem;
    }
    &__title {
        font-size: 4rem;
        text-align: left;
    }
    &:hover {
        color: $white;
        border-bottom: .1rem solid $brown;
        &::before {
            top: 0;
        }
    }


}
</style>