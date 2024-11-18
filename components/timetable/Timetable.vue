<template>
<section
    class="wrapper timetable"
    :class="{'small': props.smallDisplay}"
>
    <div class="timetable__main">
        <h2
            v-if="props.title"
            class="fs-3"
        >
            {{ props.title }}
        </h2>
        <p v-if="props.subtitle">
            {{ props.subtitle }}
        </p>
        <ul
            v-if="props.horaire_restaurant && props.horaire_restaurant.timetableItem.length"
            class="timetable__list"
        >
            <li
                class="timetable__item"
                :class="{ 'timetable__item--actif': key === goodIndex }"
                v-for="(item, key) in props.horaire_restaurant.timetableItem"
                :key="`${item.id}`"
            >
                <h3 class="fs-2">{{ item.title }}</h3>
                <span>
                    {{ item.timeSlot1 }}
                </span>
                <span v-if="item.timeSlot2">
                    {{ item.timeSlot2 }}
                </span>
            </li>
        </ul>
    </div>
    <div class="timetable__side">
        <img
            class="timetable__media"
            :src="activeItem?.picture ? `${config.public.apiBaseUrl}${activeItem.picture.file.url}` : '/pictures/picture_8.jpg'"
            :alt=" activeItem?.picture ? activeItem.picture.file.alternativeText : 'Manger'"
            loading="lazy"
        >
    </div>
</section>
</template>

<script lang="ts" setup>
import type { TimetableComponent, TimetableItem } from '@/shared/interfaces'
type KeyType = 0 | 1 | 2 | 3 | 4 | 5 | 6
const props = defineProps<TimetableComponent>()
const config = useRuntimeConfig()
const dayIndex: KeyType = new Date().getDay() as KeyType
const mapperDay: { [key in KeyType]: number } = {
    0: 6,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5
}
const goodIndex = mapperDay[dayIndex]
const tiemTableItem : TimetableItem | undefined = props.horaire_restaurant?.timetableItem[goodIndex]
const activeItem : null | TimetableItem = tiemTableItem ?? null
</script>
<style lang="scss" scoped>
.timetable {
    $c: &;
    background-color: $orange;
    border-radius: 3rem;
    padding: 5rem;
    display: grid;
    grid-template-columns: 60% 40%;
    margin-bottom: 11rem;

    @include mq($until: desktop) {
        display: flex;
        flex-direction: column-reverse;
        margin: 0 -2rem;
        margin-bottom: 9rem;
        margin-top: 13rem;
        padding: 0;
        width: calc(100% + 4rem);
    }

    &__main {
        @include mq($until: desktop) {
            padding: 2rem;
        }

        > h2 {
            line-height: 1;
            margin: 0;
            margin-bottom: 5rem;

            @include mq($until: desktop) {
                margin-bottom: 2rem;
            }
        }

        p {
            margin-bottom: 5rem;

            @include mq($until: desktop) {
                font-size: 1.4rem;
                line-height: 1;
                margin-bottom: 2rem;
            }
        }
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        @include mq($until: desktop) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__item {
        &#{$c}__item--actif {
            color: $white;
        }

        &:not(:last-child) {
            margin-bottom: 5rem;

            @include mq($until: desktop) {
                margin-bottom: 3rem;
            }
        }
        h3 {
            line-height: 1;
            margin-bottom: 1.7rem;
            font-weight: 700;

            @include mq($until: desktop) {
                font-size: 4rem;
                margin-bottom: 1rem;
            }
        }
        span {
            display: block;
            text-transform: uppercase;
            line-height: 1;
        }
    }

    &__side {
        margin-bottom: -10rem;

        @include mq($until: desktop) {
            position: relative;
            top: -4rem;
            margin-bottom: -4rem;
            padding: 0 2rem;
        }

        img {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: $global-radius;
            overflow: hidden;
        }
    }

    &.small {
        display: flex;
        flex-direction: column-reverse;
        background-color: transparent;
        padding: 0;

        .timetable__main {
            @include mq($until: desktop) {
                padding: 0;
            }
        }

        .timetable__side {
            margin-bottom: 2rem;

            @include mq($until: desktop) {
                padding: 0;
                top: 0
            }
        }

        .timetable__list {
            display: block;
        }

        .timetable__item {
            background-color: $orange;
            border-radius: $global-radius;
            text-align: right;
            padding: 2rem;
            margin-bottom: 0;

            &:not(.timetable__item--actif) {
                display: none;
            }
        }
    }
}
</style>