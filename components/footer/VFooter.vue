<template>
    <footer class="footer">
        <div class="footer__main">
            <div class="footer__info">
                <div>
                    <h3 class="fw-bold">Nous trouver</h3>
                    <a
                        :href="global.data.Info.maplink"
                        target="_blank"
                    >
                        {{ global.data.Info.street }} <br> {{ global.data.Info.zipcode }} {{ global.data.Info.city }}
                    </a>
                </div>
                <div>
                    <h3 class="fw-bold">Telephone</h3>
                    <a :href="`tel:${global.data.Info.phone}`">
                        {{ global.data.Info.phone }}
                    </a>
                </div>
            </div>
            <nav class="footer__social">
                <ul>
                    <template
                        v-for="social in global.data.Social"
                        :key="social.id"
                    >
                        <li
                            v-if="social.visible"
                        >
                            <a
                                :href="social.link"
                            >
                                <IconGenerator :name="social.picto" />
                                <span>
                                    {{ social.name }}
                                </span>
                            </a>
                        </li>
                    </template>
                </ul>
            </nav>
            <nav class="footer__nav">
                <ul>
                    <template
                        v-for="navItem in global.data.Navigation"
                        :key="navItem.id"
                    >
                    <li
                        v-if="navItem.visible"
                    >
                        <NuxtLink
                            class="fs-3"
                            :to="navItem.link === 'accueil' ? '/' : `/${navItem.link}`"
                        >
                                {{ navItem.name }}
                        </NuxtLink>
                    </li>
                    </template>
                </ul>
            </nav>
        </div>
        <div class="footer__bottom">
            <nuxtLink to="/">
                <Filanthrope />
            </nuxtLink>
        </div>
    </footer>
</template>
<script lang="ts" setup>
import type { Ref } from 'vue'
import type { Global } from '@/shared/interfaces'

const global: Ref<Global> = useState('global')
</script>
<style lang="scss" scoped>
.footer {
    background-color: $brown;
    color: $white;
    padding: 5rem;
    border-top-left-radius: $global-radius;
    border-top-right-radius: $global-radius;

    @include mq($until: desktop) {
        margin: 0 -2rem;
        padding: 2rem;
    }


    &__main {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        border-top: .1rem solid $white;
        border-bottom: .1rem solid $white;

        @include mq($until: desktop) {
            display: flex;
            flex-direction: column;
            border-top: none;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem 0;

        @include mq($until: desktop) {
            border-bottom: .1rem solid $white;
        }

        > div {
            h3 {
                font-size: 6rem;
                text-transform: uppercase;
                line-height: 1.2;
                margin-bottom: 2rem;

                @include mq($until: desktop) {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                }
            }

            a {
                display: block;
                text-decoration: none;
                color: $white;

                @include mq($until: desktop) {
                    font-size: 2rem;
                    line-height: 1;
                }
            }

            &:not(:last-child) {
                margin-bottom: 5rem;

                @include mq($until: desktop) {
                    margin-bottom: 3rem;
                }
            }
        }
    }

    &__social {

        border-left: .1rem solid $white;
        border-right: .1rem solid $white;

        @include mq($until: desktop) {
            border-left: none;
            border-right: none;
            border-bottom: .1rem solid $white;
        }

        ul {
            display: grid;
            grid-row: 1fr;
            height: 100%;

            li {
                &:not(:last-child) {
                    border-bottom: .1rem solid $white;
                }

                a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 100%;
                    padding: 3rem 2rem;
                    font-size: 4rem;
                    line-height: 1;
                    text-transform: uppercase;
                    text-decoration: none;
                    color: $white;
                    cursor: pointer;
                    overflow: hidden;
                    transition: $transition;

                    @include mq($until: desktop) {
                        padding: 2rem 1rem;
                        font-size: 3rem;
                    }

                    &::before {
                        content: '';
                        position: absolute;
                        z-index: 1;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: $white;
                        transition: $transition;
                    }

                    span {
                        z-index: 2;
                    }

                    > svg {
                        position: relative;
                        z-index: 2;
                        fill: currentColor;
                        width: 4rem;
                        height: 4rem;

                        @include mq($until: desktop) {
                            width: 3rem;
                            height: 3rem;
                        }
                    }

                    &:hover {
                        color: $black;

                        &::before {
                            top: 0;
                        }
                    }
                }
            }
        }
    }

    &__nav {
        display: flex;
        align-items: flex-end;
        padding: 2rem;

        @include mq($until: desktop) {
            padding: 0;
            margin: 2rem 0;
        }

        ul {
            li {
                &:not(:last-child) {
                    margin-bottom: 2rem;

                    @include mq($until: desktop) {
                        margin-bottom: 1rem;
                    }
                }
            }
            a {
                line-height: 1;
                color: $white;
                text-decoration: none;

                @include mq($until: desktop) {
                    font-size: 2rem;
                }
            }
        }
    }

    &__bottom {
        color: $white;
        padding-top: 5rem;

        a {
            color: $white;
        }

        svg {
            width: 100%;
            fill: currentColor;
        }

        @include mq($until: desktop) {
            padding-top: 2rem;
            border-top: solid .1rem $white;
        }
    }
}
</style>
