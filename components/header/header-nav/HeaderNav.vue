<template>
    <nav class="header-nav wrapper">
        <div>
            <VButton>
                <Gift />
                Cadeau
            </VButton>
            <VButton>
                <Calendar />
                Reserver
            </VButton>
        </div>
        <VButton @click="emit('clickOnOpenMenuBtn')">
            Menu
        </VButton>
    </nav>
</template>
<script lang="ts" setup>
const emit = defineEmits(['clickOnOpenMenuBtn'])
</script>
<style lang="scss" scoped>
.header-nav {
    position: fixed;
    top: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem!important;
    transform: translateX(-50%);

    > div {
        .c-btn {
            &:not(:last-child) {
                margin-right: 1.5rem;
            }
        }
    }
}
</style>