<template>
    <header class="header">
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
import type { HeaderMenuItem } from '@/shared/interfaces/index'
import type { Ref } from 'vue'

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
   z-index: 1;
}
</style>