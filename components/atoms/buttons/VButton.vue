<script setup lang="ts">
interface Props {
  rounded?: boolean
  externalLink?: boolean
  internalLink?: boolean
  link?: string
}

const props = withDefaults(defineProps<Props>(), {
  rounded: false,
  externalLink: false,
  internalLink: false,
})
const emit = defineEmits(['click'])
</script>

<template>
  <a
    v-if="props.externalLink && props.link"
    class="c-btn"
    :class="{ 'c-btn--rounded': props.rounded }"
    :href="props.link"
    target="_blank"
    aria-label="props.link"
  >
    <span>
      <slot />
    </span>
  </a>
  <NuxtLink
    v-else-if="props.internalLink && props.link"
    :to="props.link"
    class="c-btn"
    :class="{ 'c-btn--rounded': props.rounded }"
    aria-label="props.link"
  >
    <span>
      <slot />
    </span>
  </NuxtLink>
  <button
    v-else
    class="c-btn"
    :class="{ 'c-btn--rounded': props.rounded }"
    aria-label="Action button"
    @click="emit('click')"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
.c-btn {
    z-index: 1;
    display: inline-block;
    text-decoration: none;
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

    @include mq($until: desktop) {
        padding: 1rem 1.5rem;
        font-size: 1.8rem;
    }

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
        width: 100%;
        height: 100%;
        background-color: $black;
        transform-origin: left bottom;
        transition: $transition;
    }

    span {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        line-height: 1;
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
