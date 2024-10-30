<template>
    <header
        class="header"
        :class="{'hidden': scrollStatus.isUserScrollDown}"
    >
        <HeaderNav
            @clickOnOpenMenuBtn="displayGeneralMenu = true"
        />
        <HeaderMenu
            @closeOnCloseMenuBtn="displayGeneralMenu = false"
            :items="headerItems"
            :visible="displayGeneralMenu"
        />
    </header>
</template>
<script setup lang="ts">
import { useScroll } from '@/shared/composable/scroll'
import type { Ref } from 'vue'
interface HeaderMenuItem {
        label: string;
        img: string;
        alt: string;
        link: string;
}
const { scrollStatus } = useScroll()
const displayGeneralMenu: Ref<boolean> = ref(false)
const headerItems: HeaderMenuItem[] = [
    {
        label: 'Accueil',
        img: '/pictures/picture_1.jpg',
        alt: 'Le bar du fil',
        link: '/'
    },
    {
        label: 'La carte',
        img: '/pictures/picture_2.jpg',
        alt: 'Le bar du fil',
        link: '/carte'
    },
    {
        label: 'Nos producteurs',
        img: '/pictures/picture_3.jpg',
        alt: 'Producteur',
        link: '/producteurs'
    },
    {
        label: 'Reserver',
        img: '/pictures/picture_4.jpg',
        alt: 'Reserver',
        link: '/reserver'
    },
    {
        label: 'Articles',
        img: '/pictures/picture_5.jpg',
        alt: 'Nos articles',
        link: '/articles'
    }
]
</script>
<style lang="scss" scoped>
.header {
    position: relative;
    z-index: 10;
    &.hidden {
        .header-nav {
            top: -100%;
        }
    }
}
</style>