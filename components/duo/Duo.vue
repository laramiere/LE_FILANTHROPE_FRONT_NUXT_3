<template>
  <section
    class="duo"
    :class="{ 'duo--full': !$slots.side }"
  >
    <div class="duo__main">
      <slot />
    </div>
    <div
      v-if="$slots.side"
      class="duo__side"
    >
      <slot name="side" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.duo {
    margin-bottom: 11rem;
    display: grid;
    grid-template-columns: 70% 30%;

    @include mq($until: desktop) {
        display: block;
        margin-bottom: 9rem;
    }

    &__main {
        padding-right: 10rem;

        @include mq($until: desktop) {
            padding-right: 0;
        }
    }

    &--full {
        grid-template-columns: 1fr;

        .article__main {
            padding-right: 0;
        }
    }

    &__side {
        @include mq($until: desktop) {
            margin-top: 5rem;
        }
        > * {
            top: 2rem;
            position: sticky;
        }
    }
}
</style>
