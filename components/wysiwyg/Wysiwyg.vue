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
        &:not(:last-child) {
            margin-bottom: 3rem;
        }
    }
}
</style>