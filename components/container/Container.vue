<template>
    <section class="container">
        <div class="container__main">
            <slot />
        </div>
        <div
            v-if="$slots.side"
            class="container__side"
        >
            <slot name="side"/>
        </div>
    </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.container {
    background-color: $white;
    display: flex;
    margin-bottom: $margin-lg;
    &__main {
        width: 60%;
    }

    &__side {
        width: 40%;
    }
}
</style>