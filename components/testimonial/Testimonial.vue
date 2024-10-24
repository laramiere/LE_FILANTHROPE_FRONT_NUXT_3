<template>
    <section class="testimonial">
        <h2 class="fs-3">Nos chers clients</h2>
        <div class="testimonial__main">
            <ul class="testimonial__list">
                <li
                    v-for="item in [1,2,3]"
                    class="testimonial__item"
                >
                    <img src="/pictures/picture_1.jpg" alt="client" />
                    <p>
                        Impeccable sur toute la ligne ! Un restaurant de quartier comme on aimerait en voir davantage. L'accueil est chaleureux, sans être guindé. Le menu propose des prix raisonnables, y compris le dimanche. La cuisine y est simple et savoureuse (les frites maison : un délice), et il est possible de traîner en l'heure du café, autour de jeux de société mis à disposition gratuitement. Seul bémol si vous venez en voiture : un cauchemar pour se garer à proximité.
                    </p>
                </li>
            </ul>
            <div class="testimonial__media">
                <img src="/pictures/picture_3.jpg" alt="mon média"/>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.testimonial {
    margin-bottom: 11rem;
    
    > h2 {
        margin-bottom: 5rem;
    }

    &__main {
        display: grid;
        grid-template-columns: 69% 29%;
        column-gap: 2%;
    }

    &__item {
        display: flex;
        padding: 2rem;
        background-color: $yellow;
        border-radius: $global-radius;

        &:not(:last-child) {
            margin-bottom: 3rem;
        }

        img {
            flex: 0 0 auto;
            width: 8rem;
            height: 8rem;
            margin-right: 1.5rem;
            overflow: hidden;
            border-radius: 50%;
        }
    }

    &__media {
        position: relative;
        overflow: hidden;
        border-radius: $global-radius;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>