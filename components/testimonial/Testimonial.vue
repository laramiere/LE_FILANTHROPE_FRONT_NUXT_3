<script lang="ts" setup>
import type { TestimonialComponent } from '@/shared/interfaces'

const props = defineProps<TestimonialComponent>()
const config = useRuntimeConfig()
</script>

<template>
  <section
    class="testimonial"
    :class="{ 'testimonial--noMedia': props.pictures && props.pictures.length === 0 }"
  >
    <h2 class="fs-3">
      {{ props.title }}
    </h2>
    <div class="testimonial__main">
      <ul class="testimonial__list">
        <li
          v-for="item in props.avis_clients"
          :key="item.documentId"
          class="testimonial__item"
        >
          <img
            :src="`${config.public.apiBaseUrl}${item.picture.file.url}`"
            :alt="item.picture.file.alternativeText"
            loading="lazy"
          >
          <p>
            {{ item.content }}
          </p>
        </li>
      </ul>
      <div
        v-if="props.pictures && props.pictures.length"
        class="testimonial__media"
      >
        <img
          :src="`${config.public.apiBaseUrl}${props.pictures[0].file.url}`"
          :alt="props.pictures[0].file.alternativeText"
          loading="lazy"
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonial {
    margin-bottom: 11rem;

    @include mq($until: desktop) {
        margin-bottom: 9rem;
    }

    > h2 {
        margin-bottom: 5rem;
        @include mq($until: desktop) {
            font-size: 3rem;
            margin-bottom: 2rem;
        }
    }

    &--noMedia {
        .testimonial__main {
            grid-template-columns: 100%;
        }
    }

    &__main {
        display: grid;
        grid-template-columns: 69% 29%;
        column-gap: 2%;

        @include mq($until: desktop) {
            display: flex;
            flex-direction: column-reverse;
        }
    }

    &__list {
        &:only-child {
            width: 100%;
        }
    }

    &__item {
        display: flex;
        padding: 2rem;
        background-color: $yellow;
        border-radius: $global-radius;

        @include mq($until: desktop) {
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
                font-size: 1.4rem;
                line-height: 1.2;
            }
        }

        &:not(:last-child) {
            margin-bottom: 3rem;
            @include mq($until: desktop) {
                margin-bottom: 2rem;
            }
        }

        img {
            flex: 0 0 auto;
            width: 8rem;
            height: 8rem;
            margin-right: 1.5rem;
            overflow: hidden;
            border-radius: 50%;

            @include mq($until: desktop) {
                width: 4rem;
                height: 4rem;
                margin-right: 0;
                margin-bottom: 2rem;
            }
        }
    }

    &__media {
        position: relative;
        overflow: hidden;
        border-radius: $global-radius;

        @include mq($until: desktop) {
            margin-bottom: 2rem;
        }

        img {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;

            @include mq($until: desktop) {
                position: relative;
            }
        }
    }
}
</style>
