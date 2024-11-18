<template>
    <nav class="header-nav wrapper">
        <div>
            <VButton>
                <Gift />
                <span>Cadeau</span>
            </VButton>
            <VButton @click="handleClickOnLink('/reservation')">
                <Calendar />
                <span>Reserver</span>
            </VButton>
        </div>
        <VButton @click="emit('clickOnOpenMenuBtn')">
            Menu
        </VButton>
    </nav>
</template>
<script lang="ts" setup>
const emit = defineEmits(['clickOnOpenMenuBtn'])
const router = useRouter()
const handleClickOnLink = (link: string) => {
    router.push(link)
}
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
    transition: $transition;

    @include mq($until: desktop) {
        padding: 2rem!important;
    }

    > div {
        @include mq($until: desktop) {
            display: flex;
        }
        .c-btn {
            @include mq($until: desktop) {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 4rem;
                height: 4rem;
                svg {
                    margin-right: 0;
                }
                >span {
                    > span {
                        display: none;
                    }
                }
            }
            &:not(:last-child) {
                margin-right: 1.5rem;
            }
        }
    }
}
</style>