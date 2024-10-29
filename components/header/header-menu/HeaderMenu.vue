<template>
    <div
        class="header-menu"
        :class="{ 'header-menu--visible': visible }"
    >
        <div class="header-menu__top wrapper">
            <div>
                <VButton>
                    <Facebook />
                    Facebook
                </VButton>
                <VButton>
                    <Insta />
                    Insta
                </VButton>
            </div>
            <VButton
                @click="emit('closeOnCloseMenuBtn')"
                rounded
            >
                <Cross />
            </VButton>
        </div>
        <div class="header-menu__content wrapper">
            <nav>
                <ul>
                    <li
                        v-for="(item, key) in props.items"
                        :key="key"
                        @mouseover="handleMouseOverItemMenu(key)"
                        @mouseleave="itemActif = null"
                    >
                        <NuxtLink :to="item.link">
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="header-menu__media">
                <div
                    v-if="itemActif"
                    :style="{
                        '--image-rotation': `${imageRotation}deg`
                    }"
                >
                    <img
                        :src="itemActif.img"
                        :alt="itemActif.alt"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { Ref } from 'vue'
import type { HeaderMenuItem } from '@/shared/interfaces/index'
import { useGenericAction } from '@/shared/composable/index'

const props = defineProps<{
    items: HeaderMenuItem[],
    visible: boolean
}>()
const { generateRandomNumber } = useGenericAction()
const itemActif: Ref<HeaderMenuItem | null> = ref(null)

const imageRotation: Ref<number> = ref(0)

const handleMouseOverItemMenu = (key: number) => {
    itemActif.value = props.items[key]
    imageRotation.value = generateRandomNumber()
}
const emit = defineEmits(['closeOnCloseMenuBtn'])
</script>
<style lang="scss" scoped>
.header-menu {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: $white;
    padding: 5rem;
    transition: $transition;

    &--visible {
        top: 0;
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5rem;
        border-bottom: .1rem solid $black;

        > div {
            .c-btn {
                &:not(:last-child) {
                    margin-right: 1.5rem;
                }
            }
        }
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: calc(100vh - 21.1rem);
        border-bottom: .1rem solid $black;

        > nav {
            display: flex;
            align-items: center;

            ul {
                list-style-type: none;
                padding: 0;
                margin: 0;

                li {
                    &:not(:last-child) {
                        a {
                            padding-bottom: 3rem;
                        }
                    }
                }
            }

            a {
                display: block;
                width: 100%;
                text-decoration: none;
                color: $black;
                font-size: 4rem;
                font-weight: 700;
                line-height: 1;
                text-transform: uppercase;
            }
        }
    }

    &__media {
        position: relative;

        > div {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 70%;
            height: 70%;
            transform: translate(-50%,-50%) rotate(var(--image-rotation));
            overflow: hidden;
            border-radius: $global-radius;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>