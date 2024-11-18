<template>
    <div
        class="header-menu"
        :class="{ 'header-menu--visible': visible }"
    >
        <div class="header-menu__top wrapper">
            <div>
                <VButton>
                    <Facebook />
                    <span>Facebook</span>
                </VButton>
                <VButton>
                    <Insta />
                    <span>Insta</span>
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
                        <NuxtLink
                            :to="item.link"
                             @click="emit('closeOnCloseMenuBtn')"
                        >
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

    @include mq($until: desktop) {
        padding: 2rem;
    }
    &--visible {
        top: 0;
    }

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5rem;
        border-bottom: .1rem solid $black;

        @include mq($until: desktop) {
            padding: 0;
            padding-bottom: 2rem;
        }
        > .c-btn {
            @include mq($until: desktop) {
                width: 4rem;
                height: 4rem;
            }
        }
        > div {
            @include mq($until: desktop) {
                display: flex;
            }

            .c-btn {

                @include mq($until: desktop) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 4rem;
                    height: 4rem;

                    > span {
                        svg {
                            margin-right: 0;
                        }

                        > span {
                            display: none;
                        }
                    }
                }
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

        @include mq($until: desktop) {
            display: block;
            height: auto;
            padding: 2rem 0;
        }

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

                            @include mq($until: desktop) {
                                padding-bottom: 2rem;
                            }
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

                @include mq($until: desktop) {
                    font-size: 2.5rem;
                }
            }
        }
    }

    &__media {
        position: relative;

        @include mq($until: desktop) {
            display: none;
        }

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