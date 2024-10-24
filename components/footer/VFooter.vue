<template>
    <footer class="footer">
        <div class="footer__main">
            <div class="footer__info">
                <div>
                    <h3 class="fw-bold">Nous trouver</h3>
                    <a href="#_">
                        16 Avenue Auguste Blanqui <br/> 69100 VILLEURBANNE
                    </a>
                </div>
                <div>
                    <h3 class="fw-bold">Telephone</h3>
                    <a href="tel:0662428736">
                        0662428736
                    </a>
                </div>
            </div>
            <nav class="footer__social">
                <ul>
                    <li>
                        <a href="#_">
                            <Facebook />
                            <span>
                                Facebook
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#_">
                            <Insta />
                            <span>
                                Insta
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#_">
                            <Linkedin />
                            <span>
                                Linkedin
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav class="footer__nav">
                <ul>
                    <li>
                        <NuxtLink class="fs-3" to="/">
                            Accueil
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="fs-3" to="/">
                            La carte
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="fs-3" to="/">
                            Nos Producteurs
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="fs-3" to="/">
                            Reserver
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="fs-3" to="/">
                            Articles
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="footer__bottom">
           <Filanthrope />
        </div>
    </footer>
</template>
<style lang="scss" scoped>
.footer {
    background-color: $brown;
    color: $white;
    padding: 5rem;
    border-top-left-radius: $global-radius;
    border-top-right-radius: $global-radius;

    &__main {
        display: grid;
        grid-template-columns: repeat(3,1fr);
        border-top: .1rem solid $white;
        border-bottom: .1rem solid $white;
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem 0;

        > div {
            h3 {
                font-size: 6rem;
                text-transform: uppercase;
                line-height: 1;
                margin-bottom: 2rem;
            }

            a {
                text-decoration: none;
                color: $white;
            }

            &:not(:last-child) {
                margin-bottom: 5rem;
            }
        }
    }

    &__social {

        border-left: .1rem solid $white;
        border-right: .1rem solid $white;

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
        ul {
            li {
                &:not(:last-child) {
                    margin-bottom: 2rem;
                }
            }
            a {
                line-height: 1;
                color: $white;
                text-decoration: none;
            }
        }
    }

    &__bottom {
        color: $white;
        padding-top: 5rem;
        
        svg {
            width: 100%;
            fill: currentColor;
        }
    }
}
</style>