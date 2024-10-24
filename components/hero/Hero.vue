<template>
    <section class="hero">
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
                <img  src="/poule_fil.png" alt="Logo filanthrope" />
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup>
import type { Picture } from '@/shared/interfaces/index'
const props = withDefaults(defineProps<{
    title: string,
    subtitle?: string,
    displayLogo?: boolean,
    picture?: Picture
}>(), {
    displayLogo: false
})

</script>
<style lang="scss" scoped>
.hero {
    width: 100%;
    height: 100vh;
    background-color: $white;
    padding-top: 15.5rem;
    padding-bottom: 5rem;
    margin-bottom: $margin-lg;
    &__main {
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
            font-size: 15rem;
            line-height: 1;
        }
        h2 {
            font-size: 2rem;
            font-weight: 300;
            padding-left: 1.1rem;
        }
    }
    &__logo {
        img {
            display: block;
            width: 100%;
            max-width: 20rem;
            height: auto;
        }
    }
}
</style>