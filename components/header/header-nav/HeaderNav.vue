<template>
    <nav class="header-nav wrapper">
        <div>
            <VButton
                v-if="global.data.Gift.visible"
                :link="global.data.Gift.link"
                external-link
            >
                <Gift />
                <span>
                    {{ global.data.Gift.name }}
                </span>
            </VButton>
            <VButton
                link="/reserver"
                internal-link
            >
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
import type { Ref } from 'vue'
import type { Global } from '@/shared/interfaces'
const emit = defineEmits(['clickOnOpenMenuBtn'])
const global: Ref<Global> = useState('global')

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
        display: flex;
        align-items: center;

        .c-btn {
            text-transform: capitalize;
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
