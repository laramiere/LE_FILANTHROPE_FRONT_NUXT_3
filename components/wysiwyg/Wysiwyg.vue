<template>
    <div class="wysiwyg" v-html="props.content" />
</template>
<script lang="ts" setup>
const props = defineProps<{
    content: string;
}>()
</script>
<style lang="scss" scoped>
.wysiwyg {
    * {
        @include mq($until: desktop) {
            font-size: 1.4rem;
        }

        &:not(:last-child) {
            margin-bottom: 3rem;

            @include mq($until: desktop) {
                margin-bottom: 1.5rem;
            }
        }
    }
}
</style>