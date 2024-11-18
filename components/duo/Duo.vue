<template>
    <section
        class="duo"
        :class="{'duo--full' : !$slots.side}"
    >
        <div class="duo__main">
            <slot />
        </div>
        <div
            class="duo__side"
            v-if="$slots.side"
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

    &__main {
        padding-right: 10rem;
    }

    &--full {
        grid-template-columns: 1fr;

        .article__main {
            padding-right: 0;
        }
    }

    &__side {
        > * {
            top: 2rem;
            position: sticky;
        }
    }
}
</style>