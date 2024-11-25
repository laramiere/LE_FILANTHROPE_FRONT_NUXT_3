<template>
    <section
        class="hero"
        :class="{
            'hero--small': small,
            'hero--article': article
        }"
    >
        <div
            v-if="props.picture"
            class="hero__media"
            :class="{'visible': visible}"
            :style="{
                '--image-rotation':`${mediaRotation}deg`
            }"
        >
            <img
                :src="`${config.public.apiBaseUrl}${props.picture.file.url}`"
                :alt="props.picture.file.alternativeTex"
            >
        </div>
        <div class="hero__main">
            <div class="hero__content">
                <h1
                    v-if="props.displayLogo"
                    v-html="'le <br> filanthrope'"
                />
                <h1 v-else>
                   {{ props.title }} 
                </h1>
                <h2 v-if="props.subtitle">
                    {{ props.subtitle }}
                </h2>
            </div>
            <div
                v-if="props.displayLogo"
                class="hero__logo"
            >
                <img  src="/poule_fil.png" alt="Logo filanthrope" >
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import type { Picture } from '@/shared/interfaces/index'
import { useGenericAction } from '@/shared/composable';
import { onMounted } from 'vue';
const props = withDefaults(defineProps<{
    title: string,
    subtitle?: string,
    displayLogo?: boolean,
    picture?: Picture,
    small?: boolean,
    article?: boolean
}>(), {
    displayLogo: false
})
const { generateRandomNumber } = useGenericAction()
const mediaRotation = ref<number>(0)
const visible = ref(false)
const config = useRuntimeConfig()
onMounted (() => {
    mediaRotation.value = generateRandomNumber()
    visible.value = true
})
</script>
<style lang="scss" scoped>
.hero {
    $c: &;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: $white;
    padding-top: 15.5rem;
    padding-bottom: 5rem;
    margin-bottom: 6rem;

    @include mq($until: desktop) {
        height: 100svh;
        padding-bottom: 2rem;
    }

    &--article,
    &--small {
        #{$c}__content {
            h2 {
                padding-left: 0;
            }
        }
    }

    &--small {
        #{$c}__content {
            h1 {
                font-size: 8rem;

                @include mq($until: desktop) {
                    font-size: 3rem;
                }
            }
        }
    }

    &--article {
        #{$c}__content {
            h1 {
                font-size: 6rem;

                @include mq($until: desktop) {
                    font-size: 3rem;
                }
            }
        }
    }

    &__media {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        width: 66rem;
        height: 44.1rem;
        border-radius: $global-radius;
        overflow: hidden;
        transform: translate(-50%,-50%) rotate(var(--image-rotation));
        transition: $transition;
        opacity: 0;

        @include mq($until: desktop) {
            width: 80%;
            padding-top: 100%;
            height: auto;
        }

        &.visible {
            opacity: 1;
        }
        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;

            @include mq($until: desktop) {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }

    &__main {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        height: 100%;
    }

    &__content {
        h1,
        h2 {
            margin: 0;
        }

        h1 {
            text-transform: uppercase;
            font-size: 13.5rem;
            line-height: 1;

            @include mq($until: desktop) {
                font-size: 3.4rem;
            }
        }

        h2 {
            font-size: 2rem;
            font-weight: 300;
            padding-left: 1.1rem;

            @include mq($until: desktop) {
                font-size: 1.8rem;
                padding-left: 0;
            }
        }
    }

    &__logo {
        img {
            display: block;
            width: 100%;
            max-width: 20rem;
            height: auto;

            @include mq($until: desktop) {
                max-width: 11rem;
            }
        }
    }
}
</style>