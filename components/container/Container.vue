<script lang="ts" setup>
</script>

<template>
  <section class="container">
    <div class="container__main">
      <slot />
    </div>
    <div
      v-if="$slots.side"
      class="container__side"
    >
      <slot name="side" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
    background-color: $white;
    display: flex;
    margin-bottom: $margin-lg;

    @include mq($until: desktop) {
        margin-bottom: 9rem;
    }

    &__main {
        width: 60%;

        @include mq($until: desktop) {
            width: 100%;
        }
    }

    &__side {
        width: 40%;
    }
}
</style>
