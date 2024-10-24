<template>
    <section
        class="richtext"
        v-html="props.content"
    >

    </section>
</template>
<script lang="ts" setup>
const props = defineProps<{
    content: string
}>()
</script>
<style lang="scss">
.richtext {
    * {
        color: $black;
        margin: 0;
        &:not(:last-child) {
            margin-bottom: 4rem;
        }
    }
    p {
        font-size: 2rem;
        line-height: 1;
    }
}
</style>